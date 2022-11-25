const Scene = require('Scene');
const TouchGestures = require('TouchGestures');
const Diagnostics = require('Diagnostics');
const TimeModule = require('Time');
const Patches = require('Patches')

let work = true
let limit = true
let string1 = "|"
const time = 150

const limitSymbol = 44

let counterSymbol = 0
let countSymbolString = [0, 0, 0, 0, 0]
let nowString = 0



function sleep(ms) {
    return new Promise(resolve => TimeModule.setTimeout(resolve, ms));
}

function autoReturn(checkString) {
    if (countSymbolString[nowString] === 14) {
        checkString = checkString + "\n"
        nowString += 1
    }
    return checkString
}

function check(checkString) {
    if (counterSymbol === limitSymbol) {
        checkString = checkString.substring(0, checkString.length - 1)
        limit = false
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

        objectTxt.text = string1

        string1 = string1 + "|"
        sleep(time).then(() => {
            objectTxt.text = string1
        });
        string1 = check(string1)

        counter.text = (limitSymbol - counterSymbol).toString()
        Diagnostics.log(countSymbolString)
        Diagnostics.log(nowString)
        Diagnostics.log(counterSymbol)
        Diagnostics.log(string1)
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
    const counter = await Scene.root.findFirst('3dText1')

    await TouchGestures.onTap(a).subscribe(() => {
        touch("A", textObject, counter)
    });

    await TouchGestures.onTap(b).subscribe(() => {
        touch("B", textObject, counter)
    });

    await TouchGestures.onTap(c).subscribe(() => {
        touch("С", textObject, counter)
    });

    await TouchGestures.onTap(d).subscribe(() => {
        touch("D", textObject, counter)
    });

    await TouchGestures.onTap(e).subscribe(() => {
        touch("E", textObject, counter)
    });

    await TouchGestures.onTap(f).subscribe(() => {
        touch("F", textObject, counter)
    });

    await TouchGestures.onTap(g).subscribe(() => {
        touch("G", textObject, counter)
    });

    await TouchGestures.onTap(h).subscribe(() => {
        touch("H", textObject, counter)
    });

    await TouchGestures.onTap(i).subscribe(() => {
        touch("I", textObject, counter)
    });

    await TouchGestures.onTap(j).subscribe(() => {
        touch("J", textObject, counter)
    });

    await TouchGestures.onTap(k).subscribe(() => {
        touch("K", textObject, counter)
    });

    await TouchGestures.onTap(l).subscribe(() => {
        touch("L", textObject, counter)
    });

    await TouchGestures.onTap(m).subscribe(() => {
        touch("M", textObject, counter)
    });

    await TouchGestures.onTap(n).subscribe(() => {
        touch("N", textObject, counter)
    });

    await TouchGestures.onTap(o).subscribe(() => {
        touch("O", textObject, counter)
    });

    await TouchGestures.onTap(p).subscribe(() => {
        touch("P", textObject, counter)
    });

    await TouchGestures.onTap(q).subscribe(() => {
        touch("Q", textObject, counter)
    });

    await TouchGestures.onTap(r).subscribe(() => {
        touch("R", textObject, counter)
    });

    await TouchGestures.onTap(s).subscribe(() => {
        touch("S", textObject, counter)
    });

    await TouchGestures.onTap(t).subscribe(() => {
        touch("T", textObject, counter)
    });

    await TouchGestures.onTap(u).subscribe(() => {
        touch("U", textObject, counter)
    });

    await TouchGestures.onTap(v).subscribe(() => {
        touch("V", textObject, counter)
    });

    await TouchGestures.onTap(w).subscribe(() => {
        touch("W", textObject, counter)
    });

    await TouchGestures.onTap(x).subscribe(() => {
        touch("X", textObject, counter)
    });

    await TouchGestures.onTap(y).subscribe(() => {
        touch("Y", textObject, counter)
    });

    await TouchGestures.onTap(z).subscribe(() => {
        touch("Z", textObject, counter)
    });

    await TouchGestures.onTap(sps).subscribe(() => {
        if (work && string1 !== "|") {
            string1 = string1.substring(0, string1.length - 1)
            textObject.text = string1
            string1 = string1 + " "
            textObject.text = string1

            countSymbolString[nowString] += 1
            counterSymbol += 1

            string1 = autoReturn(string1)
            string1 = string1 + "|"
            sleep(time).then(() => {
                textObject.text = string1
            });
            counter.text = (limitSymbol - counterSymbol).toString()

            Diagnostics.log(countSymbolString)
            Diagnostics.log(nowString)
            Diagnostics.log(limitSymbol)
            Diagnostics.log(string1)
        }
    });

    await TouchGestures.onTap(ret).subscribe(() => {
        if (work) {
            string1 = string1.substring(0, string1.length - 1)
            textObject.text = string1

            string1 = string1 + "\n"
            // string1 = string1 + "*"

            nowString += 1

            textObject.text = string1
            string1 = string1 + "|"

            sleep(time).then(() => {
                textObject.text = string1
            });

            Diagnostics.log(countSymbolString)
            Diagnostics.log(nowString)
            Diagnostics.log(limitSymbol)
            Diagnostics.log(string1)
        }
    });

    await TouchGestures.onTap(delet).subscribe(() => {
        if (string1 !== "|" && work || !limit) {
            Diagnostics.log(string1)
            if (limit) {
                string1 = string1.substring(0, string1.length - 1)
                textObject.text = string1
            }
            // if (string1.slice(-1) === "*" && work) {
            if (string1.slice(-1) === "\n" && work) {
                // if (string1.slice(string1.slice(-1)-1) !== "*") {
                if (string1.slice(string1.slice(-1)-1) === "\n") {
                    Diagnostics.log(string1)
                    Diagnostics.log("deleted 1 symbol")
                    Diagnostics.log("last symbol:" + string1[counterSymbol-1])
                    string1 = string1.substring(0, string1.length - 1)
                    Diagnostics.log(string1)
                    nowString -= 1
                } else {
                    Diagnostics.log(string1)
                    Diagnostics.log("deleted 2 symbol")
                    string1 = string1.substring(0, string1.length - 2)
                    Diagnostics.log(string1)

                    counterSymbol -= 1
                    nowString -= 1
                    countSymbolString[nowString] -=1
                }

            } else {
                string1 = string1.substring(0, string1.length - 1)
                counterSymbol -= 1
                countSymbolString[nowString] -=1

            }
            if (limit === false) {
                limit = true
            }
            textObject.text = string1
            string1 = string1 + "|"
            sleep(time).then(() => {
                textObject.text = string1
            });
            counter.text = (limitSymbol - counterSymbol).toString()

            Diagnostics.log(countSymbolString)
            Diagnostics.log(nowString)
            Diagnostics.log(limitSymbol)
            Diagnostics.log(string1)
        }
    });

    await TouchGestures.onTap(done).subscribe(() => {
        if (work === true) {
            work = false
            string1 = string1.substring(0, string1.length - 1)
            textObject.text = string1
            return
        }

        if (work === false) {
            work = true
            string1 = string1 + "|"
            sleep(time).then(() => {
                textObject.text = string1
            });
        }
    });
})();