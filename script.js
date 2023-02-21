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
        constructorWork = false,
        constructorLimit = true,
        constructorText = "",
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

                    this.text = checkString.slice(0, this.counterSymbol - numberOfWhiteSpace) + "\n" +
                        checkString.slice(this.counterSymbol - numberOfWhiteSpace + 1)

                    return
                }

                if (this.countSymbolString[this.nowString] - numberOfWhiteSpace + 1 === 0) {
                    break
                }
            }

            checkString += "\n"
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

            if (symbol === ",") {
                this.vocabularyCheck()
            }

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

            return
        }

        if (this.work === false) {
            this.work = true
            if (this.limit) {
                this.text += "|"
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
}

class blockOfStrings {
    constructor(
        constructorBlocks = [
            new S(),
            new S(),
            new S(),
            new S(),
            new S()
        ],
        constructorBlockNumber = 0
    ) {
        this.block = constructorBlocks
        this.blockNumber = constructorBlockNumber
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
    const dot = await Scene.root.findFirst('letter_dot')

    const returnButton = await Scene.root.findFirst('return')
    const whiteSpaceButton = await Scene.root.findFirst('sps')
    const deleteButton = await Scene.root.findFirst('delete')

    let textObject;
    let counterObject;

    const textObject0 = await Scene.root.findFirst('text_block1')
    const counterObject0 = await Scene.root.findFirst('counter_block1')

    const textObject1 = await Scene.root.findFirst('text_block2')
    const counterObject1 = await Scene.root.findFirst('counter_block2')

    const done_block1 = await Scene.root.findFirst('done_block1')
    const edit_block1 = await Scene.root.findFirst('edit_block1')

    const done_block2 = await Scene.root.findFirst('done_block2')
    const edit_block2 = await Scene.root.findFirst('edit_block2')

    let B = new blockOfStrings()

    await TouchGestures.onTap(a).subscribe(() => {
        B.block[B.blockNumber].touch("A", textObject, counterObject)
    });

    await TouchGestures.onTap(b).subscribe(() => {
        B.block[B.blockNumber].touch("B", textObject, counterObject)
    });

    await TouchGestures.onTap(c).subscribe(() => {
        B.block[B.blockNumber].touch("C", textObject, counterObject)
    });

    await TouchGestures.onTap(d).subscribe(() => {
        B.block[B.blockNumber].touch("D", textObject, counterObject)
    });

    await TouchGestures.onTap(e).subscribe(() => {
        B.block[B.blockNumber].touch("E", textObject, counterObject)
    });

    await TouchGestures.onTap(f).subscribe(() => {
        B.block[B.blockNumber].touch("F", textObject, counterObject)
    });

    await TouchGestures.onTap(g).subscribe(() => {
        B.block[B.blockNumber].touch("G", textObject, counterObject)
    });

    await TouchGestures.onTap(h).subscribe(() => {
        B.block[B.blockNumber].touch("H", textObject, counterObject)
    });

    await TouchGestures.onTap(i).subscribe(() => {
        B.block[B.blockNumber].touch("I", textObject, counterObject)
    });

    await TouchGestures.onTap(j).subscribe(() => {
        B.block[B.blockNumber].touch("J", textObject, counterObject)
    });

    await TouchGestures.onTap(k).subscribe(() => {
        B.block[B.blockNumber].touch("K", textObject, counterObject)
    });

    await TouchGestures.onTap(l).subscribe(() => {
        B.block[B.blockNumber].touch("L", textObject, counterObject)
    });

    await TouchGestures.onTap(m).subscribe(() => {
        B.block[B.blockNumber].touch("M", textObject, counterObject)
    });

    await TouchGestures.onTap(n).subscribe(() => {
        B.block[B.blockNumber].touch("N", textObject, counterObject)
    });

    await TouchGestures.onTap(o).subscribe(() => {
        B.block[B.blockNumber].touch("O", textObject, counterObject)
    });

    await TouchGestures.onTap(p).subscribe(() => {
        B.block[B.blockNumber].touch("P", textObject, counterObject)
    });

    await TouchGestures.onTap(q).subscribe(() => {
        B.block[B.blockNumber].touch("Q", textObject, counterObject)
    });

    await TouchGestures.onTap(r).subscribe(() => {
        B.block[B.blockNumber].touch("R", textObject, counterObject)
    });

    await TouchGestures.onTap(s).subscribe(() => {
        B.block[B.blockNumber].touch("S", textObject, counterObject)
    });

    await TouchGestures.onTap(t).subscribe(() => {
        B.block[B.blockNumber].touch("T", textObject, counterObject)
    });

    await TouchGestures.onTap(u).subscribe(() => {
        B.block[B.blockNumber].touch("U", textObject, counterObject)
    });

    await TouchGestures.onTap(v).subscribe(() => {
        B.block[B.blockNumber].touch("V", textObject, counterObject)
    });

    await TouchGestures.onTap(w).subscribe(() => {
        B.block[B.blockNumber].touch("W", textObject, counterObject)
    });

    await TouchGestures.onTap(x).subscribe(() => {
        B.block[B.blockNumber].touch("X", textObject, counterObject)
    });

    await TouchGestures.onTap(y).subscribe(() => {
        B.block[B.blockNumber].touch("Y", textObject, counterObject)
    });

    await TouchGestures.onTap(z).subscribe(() => {
        B.block[B.blockNumber].touch("Z", textObject, counterObject)
    });

    await TouchGestures.onTap(whiteSpaceButton).subscribe(() => {
        B.block[B.blockNumber].whiteSpace(textObject, counterObject)
    });

    await TouchGestures.onTap(returnButton).subscribe(() => {
        B.block[B.blockNumber].lineBreak(textObject, counterObject)
    });

    await TouchGestures.onTap(deleteButton).subscribe(() => {
        B.block[B.blockNumber].deleteSymbol(textObject, counterObject)
    });

    await TouchGestures.onTap(dot).subscribe(() => {
        B.block[B.blockNumber].touch(",", textObject, counterObject)
    });

    await TouchGestures.onTap(done_block1).subscribe(() => {
        B.block[B.blockNumber].doneButton(textObject, counterObject)
    });

    await TouchGestures.onTap(edit_block1).subscribe(() => {
        const nowNumberBlock = 0

        Diagnostics.log("@@@@@@@@@@@@@@@")
        Diagnostics.log(B.blockNumber)
        Diagnostics.log(B.block[B.blockNumber].work)
        Diagnostics.log("@@@@@@@@@@@@@@@")

        if (B.blockNumber === nowNumberBlock) {
            // if (B.block[nowNumberBlock].work === false) {
            //
            // }
            textObject = textObject0
            counterObject = counterObject0
            B.block[nowNumberBlock].doneButton(textObject, counterObject)
        }

        if (
            B.block[B.blockNumber].work === true &&
            B.block[nowNumberBlock].work === false
        ) {
            B.block[B.blockNumber].doneButton(textObject, counterObject)
            B.blockNumber = nowNumberBlock
            B.block[B.blockNumber].doneButton(textObject, counterObject)
            textObject = textObject0
            counterObject = counterObject0
        }

        Diagnostics.log("@@@@@@@@@@@@@@@")
        Diagnostics.log(B.blockNumber)
        Diagnostics.log(B.block[B.blockNumber].work)
        Diagnostics.log("@@@@@@@@@@@@@@@")

    });

    await TouchGestures.onTap(done_block2).subscribe(() => {
        B.block[B.blockNumber].doneButton(textObject, counterObject)
    });

    await TouchGestures.onTap(edit_block2).subscribe(() => {
        const nowNumberBlock = 1

        Diagnostics.log("@@@@@@@@@@@@@@@")
        Diagnostics.log(B.blockNumber)
        Diagnostics.log(B.block[B.blockNumber].work)
        Diagnostics.log("@@@@@@@@@@@@@@@")

        if (B.blockNumber === nowNumberBlock) {
            if (B.block[nowNumberBlock].work === false) {
                B.block[nowNumberBlock].work = true
                textObject = textObject1
                counterObject = counterObject1
            }
        }

        if (
            B.block[B.blockNumber].work === true &&
            B.block[nowNumberBlock].work === false
        ) {
            B.block[B.blockNumber].doneButton(textObject, counterObject)
            B.blockNumber = nowNumberBlock
            B.block[B.blockNumber].doneButton(textObject, counterObject)
            textObject = textObject1
            counterObject = counterObject1
        }

        Diagnostics.log("@@@@@@@@@@@@@@@")
        Diagnostics.log(B.blockNumber)
        Diagnostics.log(B.block[B.blockNumber].work)
        Diagnostics.log("@@@@@@@@@@@@@@@")

    });
})();
