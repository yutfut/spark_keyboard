const Scene = require('Scene');
const TouchGestures = require('TouchGestures');
const Diagnostics = require('Diagnostics');
const TimeModule = require('Time');
const Reactive = require('Reactive');
const Patches = require('Patches');

import {metric, tranferMetrics, printString, whiteSpaseFoundMetrics, deletedWhiteSpaceMetrics, vocabularyCheckMetrics} from './metrics'

function sleep(ms) {
    return new Promise(resolve => TimeModule.setTimeout(resolve, ms));
}

const dict = {
    "FUCK": "F*CK",
    "SHIT": "SH*T",
    "FUCKED": "F*CKED",
    "FUCKING": "F*CKING"
}

const time = 150

class S {
    constructor(
        constructorWork = true,
        constructorLimit = true,
        constructorText = "|",
        constructorLimitReturn = 4,
        constructorCounterSymbol = 0,
        constructorCountSymbolString = [0, 0, 0, 0, 0],
        constructorNowString = 0
    ) {
        this.work = constructorWork;
        this.limit = constructorLimit;
        this.text = constructorText;
        this.limitReturn = constructorLimitReturn;
        this.counterSymbol = constructorCounterSymbol;
        this.countSymbolString = constructorCountSymbolString;
        this.nowString = constructorNowString
    }

    outputPatches(objectTxt, objectCounter) {
        sleep(time).then(() => {
            Patches.inputs.setString('Text', this.text)
            Patches.inputs.setScalar('counterSymbol', this.counterSymbol)
            objectTxt.text = this.text
            objectCounter.text = (this.counterSymbol).toString()
        });
    }

    checkOfLimit() {
        if (this.countSymbolString[4] === 14) {
            this.limit = false
        }
    }

    autoReturn() {
        let checkString = this.text
        if (this.nowString === this.limitReturn &&
            this.countSymbolString[this.nowString] === 13) {
            this.limit = false
            this.text = checkString
            return
        }

        if (this.countSymbolString[this.nowString] === 14) {
            if (checkString[this.counterSymbol - 1] === " ") {

                while (true) {
                    if (checkString[this.counterSymbol - 1] === " ") {

                        deletedWhiteSpaceMetrics(checkString, this.counterSymbol, this.checkString)

                        checkString = checkString.substring(0, checkString.length - 1)
                        this.counterSymbol -= 1
                        this.countSymbolString[this.nowString] -= 1
                    } else {
                        checkString += "\n"
                        this.counterSymbol += 1
                        this.nowString += 1

                        metric(
                            this.work,
                            this.limit,
                            this.counterSymbol,
                            this.countSymbolString,
                            this.nowString,
                            this.text
                        )

                        this.text = checkString

                        return
                    }
                }
            }

            Diagnostics.log("Ищем номер пробела с конца")

            let numberOfWhiteSpace = 0
            for (;numberOfWhiteSpace < 14; numberOfWhiteSpace++) {
                tranferMetrics(this.counterSymbol, numberOfWhiteSpace, this.text)

                if (this.text[this.counterSymbol - numberOfWhiteSpace] === " ") {
                    whiteSpaseFoundMetrics(numberOfWhiteSpace, this.counterSymbol, this.text)

                    this.countSymbolString[this.nowString] -= numberOfWhiteSpace
                    this.countSymbolString[this.nowString+1] += (numberOfWhiteSpace - 1)
                    this.nowString += 1

                    this.text = checkString.slice(0, this.counterSymbol - numberOfWhiteSpace) + "\n" + checkString.slice(this.counterSymbol - numberOfWhiteSpace + 1)

                    return
                }

                if (this.countSymbolString[this.nowString] - numberOfWhiteSpace + 1 === 0) {
                    break
                }
            }

            this.checkString += "\n"
            this.counterSymbol += 1
            this.nowString += 1
        }

        this.text = checkString
    }

    vocabularyCheck() {
        let checkString = this.text
        let lastWord = ""

        Diagnostics.log("searchWhiteSpace for vocabulary")

        let numberOfWhiteSpace = 0
        for (;numberOfWhiteSpace < 14; numberOfWhiteSpace++) {

            if (this.text[this.counterSymbol - numberOfWhiteSpace] === " " ||
                this.countSymbolString[this.nowString] - numberOfWhiteSpace + 1 === 0) {
                vocabularyCheckMetrics(numberOfWhiteSpace, this.counterSymbol, checkString)

                lastWord = checkString.slice(this.counterSymbol - numberOfWhiteSpace + 1)

                if (lastWord in dict) {
                    this.text = checkString.slice(0, this.counterSymbol - numberOfWhiteSpace + 1) + dict[lastWord]
                }

                printString(lastWord, lastWord.length)
            }
        }
    }

    touch(symbol, objectTxt, objectCounter) {
        if (this.work && this.limit) {
            this.text = this.text.substring(0, this.text.length - 1)
            objectTxt.text = this.text

            this.autoReturn()

            this.text += symbol
            this.countSymbolString[this.nowString] += 1
            this.counterSymbol += 1

            if (this.limit === true) {
                this.text = this.text + "|"
            }

            this.outputPatches(objectTxt, objectCounter)

            this.checkOfLimit()

            metric(
                this.work,
                this.limit,
                this.counterSymbol,
                this.countSymbolString,
                this.nowString,
                this.text
            )
        }
    }

    whiteSpace(objectTxt, objectCounter) {
        if (this.work && this.text !== "|" && this.limit) {

            this.text = this.text.substring(0, this.text.length - 1)
            objectTxt.text = this.text

            this.vocabularyCheck()

            if (this.countSymbolString[this.nowString] === 0) {
                Diagnostics.log("white space can't be first symbol in the line")
                return
            }

            if (this.countSymbolString[this.nowString] === 14) {
                this.text += "\n"
                this.counterSymbol += 1
                this.nowString += 1
            } else {
                this.text = this.text + " "
                this.countSymbolString[this.nowString] += 1
                this.counterSymbol += 1
            }

            // string1 = autoReturn(string1)

            if (this.limit === true) {
                this.text = this.text + "|"
            }

            this.outputPatches(objectTxt, objectCounter)

            this.checkOfLimit()

            metric(
                this.work,
                this.limit,
                this.counterSymbol,
                this.countSymbolString,
                this.nowString,
                this.text
            )
        }
    }

    deleteSymbol(objectTxt, objectCounter) {
        if (this.text !== "|" && this.work) {
            if (this.text[this.counterSymbol] === "|") {
                this.text = this.text.slice(0, this.text.length - 1)
            }

            if (this.text[this.counterSymbol - 1] === "\n" &&
                this.countSymbolString[this.nowString] === 0) {
                this.nowString -= 1
            } else {
                this.countSymbolString[this.nowString] -= 1
            }

            this.text = this.text.substring(0, this.text.length - 1)
            this.counterSymbol -= 1

            this.text = this.text + "|"

            if (!this.limit) {
                this.limit = true
            }

            this.outputPatches(objectTxt, objectCounter)

            metric(
                this.work,
                this.limit,
                this.counterSymbol,
                this.countSymbolString,
                this.nowString,
                this.text
            )
        }
    }

    lineBreak(objectTxt, objectCounter) {
        if (this.limit && this.nowString < this.limitReturn) {
            this.text = this.text.substring(0, this.text.length - 1)
            objectTxt.text = this.text

            this.vocabularyCheck()

            while (true) {
                if (this.text[this.counterSymbol - 1] === " ") {
                    this.text = this.text.substring(0, this.text.length - 1)
                    this.counterSymbol -= 1
                    this.countSymbolString[this.nowString] -= 1
                } else {
                    break
                }
            }

            this.text += "\n|"

            this.nowString += 1
            this.counterSymbol += 1

            this.outputPatches(objectTxt, objectCounter)

            metric(
                this.work,
                this.limit,
                this.counterSymbol,
                this.countSymbolString,
                this.nowString,
                this.text
            )
        } else {
            Patches.inputs.setPulse('custPulse', Reactive.once())
        }
    }

    doneButton(objectTxt, objectCounter) {
        if (this.work === true) {
            this.work = false
            if (this.limit) {
                this.text = this.text.substring(0, this.text.length - 1)
                this.vocabularyCheck()

                this.outputPatches(objectTxt, objectCounter)
            }

            metric(
                this.work,
                this.limit,
                this.counterSymbol,
                this.countSymbolString,
                this.nowString,
                this.text
            )

            return
        }

        if (this.work === false) {
            this.work = true
            if (this.limit) {
                this.text += "|"

                this.outputPatches(objectTxt, objectCounter)
            }

            metric(
                this.work,
                this.limit,
                this.counterSymbol,
                this.countSymbolString,
                this.nowString,
                this.text
            )
        }
    }
}

(async function () {
    const a = await Scene.root.findFirst('letter_a')
    const b = await Scene.root.findFirst('letter_b')
    const c = await Scene.root.findFirst('letter_c')
    const d = await Scene.root.findFirst('letter_d')
    const e = await Scene.root.findFirst('letter_e')
    const f = await Scene.root.findFirst('letter_f')
    const g = await Scene.root.findFirst('letter_g')
    const h = await Scene.root.findFirst('letter_h')
    const i = await Scene.root.findFirst('letter_i')
    const j = await Scene.root.findFirst('letter_j')
    const k = await Scene.root.findFirst('letter_k')
    const l = await Scene.root.findFirst('letter_l')
    const m = await Scene.root.findFirst('letter_m')
    const n = await Scene.root.findFirst('letter_n')
    const o = await Scene.root.findFirst('letter_o')
    const p = await Scene.root.findFirst('letter_p')
    const q = await Scene.root.findFirst('letter_q')
    const r = await Scene.root.findFirst('letter_r')
    const s = await Scene.root.findFirst('letter_s')
    const t = await Scene.root.findFirst('letter_t')
    const u = await Scene.root.findFirst('letter_u')
    const v = await Scene.root.findFirst('letter_v')
    const w = await Scene.root.findFirst('letter_w')
    const x = await Scene.root.findFirst('letter_x')
    const y = await Scene.root.findFirst('letter_y')
    const z = await Scene.root.findFirst('letter_z')

    const sps = await Scene.root.findFirst('sps')
    const ret = await Scene.root.findFirst('return')
    const delet = await Scene.root.findFirst('delete')

    const done = await Scene.root.findFirst('done')

    const textObject = await Scene.root.findFirst('3dText0')
    const counterObject = await Scene.root.findFirst('3dText1')

    let text = new S();

    await TouchGestures.onTap(a).subscribe(() => {
        text.touch("A", textObject, counterObject)
    });

    await TouchGestures.onTap(b).subscribe(() => {
        text.touch("B", textObject, counterObject)
    });

    await TouchGestures.onTap(c).subscribe(() => {
        text.touch("C", textObject, counterObject)
    });

    await TouchGestures.onTap(d).subscribe(() => {
        text.touch("D", textObject, counterObject)
    });

    await TouchGestures.onTap(e).subscribe(() => {
        text.touch("E", textObject, counterObject)
    });

    await TouchGestures.onTap(f).subscribe(() => {
        text.touch("F", textObject, counterObject)
    });

    await TouchGestures.onTap(g).subscribe(() => {
        text.touch("G", textObject, counterObject)
    });

    await TouchGestures.onTap(h).subscribe(() => {
        text.touch("H", textObject, counterObject)
    });

    await TouchGestures.onTap(i).subscribe(() => {
        text.touch("I", textObject, counterObject)
    });

    await TouchGestures.onTap(j).subscribe(() => {
        text.touch("J", textObject, counterObject)
    });

    await TouchGestures.onTap(k).subscribe(() => {
        text.touch("K", textObject, counterObject)
    });

    await TouchGestures.onTap(l).subscribe(() => {
        text.touch("L", textObject, counterObject)
    });

    await TouchGestures.onTap(m).subscribe(() => {
        text.touch("M", textObject, counterObject)
    });

    await TouchGestures.onTap(n).subscribe(() => {
        text.touch("N", textObject, counterObject)
    });

    await TouchGestures.onTap(o).subscribe(() => {
        text.touch("O", textObject, counterObject)
    });

    await TouchGestures.onTap(p).subscribe(() => {
        text.touch("P", textObject, counterObject)
    });

    await TouchGestures.onTap(q).subscribe(() => {
        text.touch("Q", textObject, counterObject)
    });

    await TouchGestures.onTap(r).subscribe(() => {
        text.touch("R", textObject, counterObject)
    });

    await TouchGestures.onTap(s).subscribe(() => {
        text.touch("S", textObject, counterObject)
    });

    await TouchGestures.onTap(t).subscribe(() => {
        text.touch("T", textObject, counterObject)
    });

    await TouchGestures.onTap(u).subscribe(() => {
        text.touch("U", textObject, counterObject)
    });

    await TouchGestures.onTap(v).subscribe(() => {
        text.touch("V", textObject, counterObject)
    });

    await TouchGestures.onTap(w).subscribe(() => {
        text.touch("W", textObject, counterObject)
    });

    await TouchGestures.onTap(x).subscribe(() => {
        text.touch("X", textObject, counterObject)
    });

    await TouchGestures.onTap(y).subscribe(() => {
        text.touch("Y", textObject, counterObject)
    });

    await TouchGestures.onTap(z).subscribe(() => {
        text.touch("Z", textObject, counterObject)
    });

    await TouchGestures.onTap(sps).subscribe(() => {
        text.whiteSpace(textObject, counterObject)
    });

    await TouchGestures.onTap(ret).subscribe(() => {
        text.lineBreak(textObject, counterObject)
    });

    await TouchGestures.onTap(delet).subscribe(() => {
        text.deleteSymbol(textObject, counterObject)
    });

    await TouchGestures.onTap(done).subscribe(() => {
        text.doneButton(textObject, counterObject)
    });
})();