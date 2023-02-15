const Scene = require('Scene');
const TouchGestures = require('TouchGestures');
const Diagnostics = require('Diagnostics');
const TimeModule = require('Time');
const Reactive = require('Reactive');
const Patches = require('Patches');

import {metric, tranferMetrics, printString, whiteSpaseFoundMetrics, deletedWhiteSpaceMetrics, vocabularyCheckMetrics} from './metrics'

let work = true
let limit = true
let string1 = "|"
const time = 150

const limitReturn = 4

let counterSymbol = 0;
let countSymbolString = [0, 0, 0, 0, 0]
let nowString = 0

function sleep(ms) {
    return new Promise(resolve => TimeModule.setTimeout(resolve, ms));
}

function autoReturn(checkString) {
    if (nowString === limitReturn && countSymbolString[nowString] === 13) {
        limit = false
        return checkString
    }

    if (countSymbolString[nowString] === 14) {
        if (checkString[counterSymbol - 1] === " ") {

            while (true) {
                if (checkString[counterSymbol - 1] === " ") {

                    deletedWhiteSpaceMetrics(checkString, counterSymbol, checkString)

                    checkString = checkString.substring(0, checkString.length - 1)
                    counterSymbol -= 1
                    countSymbolString[nowString] -= 1
                } else {
                    checkString += "\n"
                    counterSymbol += 1
                    nowString += 1

                    metric(work, limit, counterSymbol, countSymbolString, nowString, string1)

                    return checkString
                }
            }
        }

        Diagnostics.log("Ищем номер пробела с конца")

        let numberOfWhiteSpace = 0
        for (;numberOfWhiteSpace < 14; numberOfWhiteSpace++) {
            tranferMetrics(counterSymbol, numberOfWhiteSpace, string1)

            if (string1[counterSymbol - numberOfWhiteSpace] === " ") {
                whiteSpaseFoundMetrics(numberOfWhiteSpace, counterSymbol, string1)

                countSymbolString[nowString] -= numberOfWhiteSpace
                countSymbolString[nowString+1] += (numberOfWhiteSpace - 1)
                nowString += 1

                return checkString.slice(0,counterSymbol - numberOfWhiteSpace) + "\n" + checkString.slice(counterSymbol - numberOfWhiteSpace+1)
            }

            if (countSymbolString[nowString] - numberOfWhiteSpace + 1 === 0) {
                break
            }
        }

        checkString += "\n"
        counterSymbol += 1
        nowString += 1
    }

    return checkString
}

function checkOfLimit() {
    if (countSymbolString[4] === 14) {
        limit = false
    }
}

const dict = {
    "FUCK": "F*CK",
    "SHIT": "SH*T",
    "FUCKED": "F*CKED",
    "FUCKING": "F*CKING"
}

function vocabularyCheck(checkString) {
    let lastWord = ""

    Diagnostics.log("searchWhiteSpace for vocabulary")

    let numberOfWhiteSpace = 0
    for (;numberOfWhiteSpace < 14; numberOfWhiteSpace++) {

        if (string1[counterSymbol - numberOfWhiteSpace] === " " || countSymbolString[nowString] - numberOfWhiteSpace + 1 === 0) {
            vocabularyCheckMetrics(numberOfWhiteSpace, counterSymbol, checkString)

            lastWord = checkString.slice(counterSymbol - numberOfWhiteSpace + 1)

            if (lastWord in dict) {
                return checkString.slice(0,counterSymbol - numberOfWhiteSpace + 1) + dict[lastWord]
            }

            printString(lastWord, lastWord.length)
        }
    }

    return checkString
}

function touch(symbol, objectTxt, counter) {
    if (work && limit) {
        string1 = string1.substring(0, string1.length - 1)
        objectTxt.text = string1

        string1 = autoReturn(string1)

        string1 += symbol
        countSymbolString[nowString] += 1
        counterSymbol += 1

        Patches.inputs.setString('Text', string1)
        Patches.inputs.setScalar('counterSymbol', counterSymbol)

        if (limit === true) {
            string1 = string1 + "|"
        }

        sleep(time).then(() => {
            objectTxt.text = string1
            counter.text = (counterSymbol).toString()
        });

        checkOfLimit()

        metric(work, limit, counterSymbol, countSymbolString, nowString, string1)
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

    await TouchGestures.onTap(a).subscribe(() => {
        touch("A", textObject, counterObject)
    });

    await TouchGestures.onTap(b).subscribe(() => {
        touch("B", textObject, counterObject)
    });

    await TouchGestures.onTap(c).subscribe(() => {
        touch("C", textObject, counterObject)
    });

    await TouchGestures.onTap(d).subscribe(() => {
        touch("D", textObject, counterObject)
    });

    await TouchGestures.onTap(e).subscribe(() => {
        touch("E", textObject, counterObject)
    });

    await TouchGestures.onTap(f).subscribe(() => {
        touch("F", textObject, counterObject)
    });

    await TouchGestures.onTap(g).subscribe(() => {
        touch("G", textObject, counterObject)
    });

    await TouchGestures.onTap(h).subscribe(() => {
        touch("H", textObject, counterObject)
    });

    await TouchGestures.onTap(i).subscribe(() => {
        touch("I", textObject, counterObject)
    });

    await TouchGestures.onTap(j).subscribe(() => {
        touch("J", textObject, counterObject)
    });

    await TouchGestures.onTap(k).subscribe(() => {
        touch("K", textObject, counterObject)
    });

    await TouchGestures.onTap(l).subscribe(() => {
        touch("L", textObject, counterObject)
    });

    await TouchGestures.onTap(m).subscribe(() => {
        touch("M", textObject, counterObject)
    });

    await TouchGestures.onTap(n).subscribe(() => {
        touch("N", textObject, counterObject)
    });

    await TouchGestures.onTap(o).subscribe(() => {
        touch("O", textObject, counterObject)
    });

    await TouchGestures.onTap(p).subscribe(() => {
        touch("P", textObject, counterObject)
    });

    await TouchGestures.onTap(q).subscribe(() => {
        touch("Q", textObject, counterObject)
    });

    await TouchGestures.onTap(r).subscribe(() => {
        touch("R", textObject, counterObject)
    });

    await TouchGestures.onTap(s).subscribe(() => {
        touch("S", textObject, counterObject)
    });

    await TouchGestures.onTap(t).subscribe(() => {
        touch("T", textObject, counterObject)
    });

    await TouchGestures.onTap(u).subscribe(() => {
        touch("U", textObject, counterObject)
    });

    await TouchGestures.onTap(v).subscribe(() => {
        touch("V", textObject, counterObject)
    });

    await TouchGestures.onTap(w).subscribe(() => {
        touch("W", textObject, counterObject)
    });

    await TouchGestures.onTap(x).subscribe(() => {
        touch("X", textObject, counterObject)
    });

    await TouchGestures.onTap(y).subscribe(() => {
        touch("Y", textObject, counterObject)
    });

    await TouchGestures.onTap(z).subscribe(() => {
        touch("Z", textObject, counterObject)
    });

    await TouchGestures.onTap(sps).subscribe(() => {
        if (work && string1 !== "|" && limit) {

            string1 = string1.substring(0, string1.length - 1)
            textObject.text = string1

            string1 = vocabularyCheck(string1)

            if (countSymbolString[nowString] === 0) {
                Diagnostics.log("white space can't be first symbol in the line")
                return
            }

            if (countSymbolString[nowString] === 14) {
                string1 += "\n"
                counterSymbol += 1
                nowString += 1
            } else {
                string1 = string1 + " "
                countSymbolString[nowString] += 1
                counterSymbol += 1
            }

            // string1 = autoReturn(string1)

            if (limit === true) {
                string1 = string1 + "|"
            }

            Patches.inputs.setString('Text', string1)
            Patches.inputs.setScalar('counterSymbol', counterSymbol)

            sleep(time).then(() => {
                textObject.text = string1
                counterObject.text = (counterSymbol).toString()
            });
            checkOfLimit()

            metric(work, limit, counterSymbol, countSymbolString, nowString, string1)
        }
    });

    await TouchGestures.onTap(ret).subscribe(() => {
        if (limit && nowString < limitReturn) {
            string1 = string1.substring(0, string1.length - 1)
            textObject.text = string1

            string1 = vocabularyCheck(string1)

            while (true) {
                if (string1[counterSymbol - 1] === " ") {
                    string1 = string1.substring(0, string1.length - 1)
                    counterSymbol -= 1
                    countSymbolString[nowString] -= 1
                } else {
                    break
                }
            }

            string1 += "\n|"

            nowString += 1
            counterSymbol += 1

            Patches.inputs.setString('Text', string1)

            sleep(time).then(() => {
                textObject.text = string1
                counterObject.text = (counterSymbol).toString()
            });

            metric(work, limit, counterSymbol, countSymbolString, nowString, string1)
        } else {
            Patches.inputs.setPulse('custPulse', Reactive.once())
        }
    });

    await TouchGestures.onTap(delet).subscribe(() => {
        if (string1 !== "|" && work) {

            if (string1[counterSymbol] === "|") {
                string1 = string1.slice(0, string1.length - 1)
            }

            if (string1[counterSymbol - 1] === "\n" && countSymbolString[nowString] === 0) {
                nowString -= 1
            } else {
                countSymbolString[nowString] -= 1
            }

            string1 = string1.substring(0, string1.length - 1)
            counterSymbol -= 1

            string1 = string1 + "|"

            textObject.text = string1
            counterObject.text = (counterSymbol).toString()

            if (!limit) {
                limit = true
            }

            metric(work, limit, counterSymbol, countSymbolString, nowString, string1)
        }
    });

    await TouchGestures.onTap(done).subscribe(() => {
        if (work === true) {
            work = false
            if (limit) {
                string1 = string1.substring(0, string1.length - 1)
                string1 = vocabularyCheck(string1)
                sleep(time).then(() => {
                    textObject.text = string1
                });
            }
            metric(work, limit, counterSymbol, countSymbolString, nowString, string1)
            return
        }

        if (work === false) {
            work = true
            if (limit) {
                string1 = string1 + "|"
                sleep(time).then(() => {
                    textObject.text = string1
                });
            }
            metric(work, limit, counterSymbol, countSymbolString, nowString, string1)
        }
    });
})();