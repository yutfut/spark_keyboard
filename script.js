const Scene = require('Scene');
const TouchGestures = require('TouchGestures');
const Diagnostics = require('Diagnostics');
const TimeModule = require('Time');
const Reactive = require('Reactive');
const Patches = require('Patches');

let work = true
let limit = true
let string1 = "|"
const time = 150

const limitSymbol = 44
const limitReturn = 4

let counterSymbol = 0;
let countSymbolString = [0, 0, 0, 0, 0]
let nowString = 0

const debug = true

function metric() {
    if (debug) {
        Diagnostics.log("-----------------------------------------------")
        Diagnostics.log("work:              " + work)
        Diagnostics.log("limit:             " + limit)
        Diagnostics.log("counterSymbol:     " + counterSymbol)
        Diagnostics.log("countSymbolString: " + countSymbolString)
        Diagnostics.log("nowString:         " + nowString)
        Diagnostics.log("-----------------------------------------------")
    }
}


function sleep(ms) {
    return new Promise(resolve => TimeModule.setTimeout(resolve, ms));
}

function autoReturn(checkString) {
    if (nowString === limitReturn && countSymbolString[nowString] === 13) {
        limit = false
        return checkString
    }
    if (countSymbolString[nowString] === 14) {
        checkString = checkString + "\n"
        nowString += 1
    }
    return checkString
}

function check(checkString) {
    if (counterSymbol === limitSymbol ) {
        checkString = checkString.substring(0, checkString.length - 1)
        limit = false
    }
    return checkString
}

// (async function() {
//     await Patches.inputs.setScalar('counterSymbol', counterSymbol)
// })();

function touch(symbol, objectTxt, counter) {
    if (work && limit) {
        string1 = string1.substring(0, string1.length - 1)
        objectTxt.text = string1

        string1 = autoReturn(string1)

        string1 += symbol
        Patches.inputs.setString('Text', string1)

        countSymbolString[nowString] += 1
        counterSymbol += 1
        Patches.inputs.setScalar('counterSymbol', counterSymbol)

        objectTxt.text = string1

        counter.text = (limitSymbol - counterSymbol).toString()

        if (limit === false) {
            return
        }

        string1 = string1 + "|"
        sleep(time).then(() => {
            objectTxt.text = string1
        });
        string1 = check(string1)
        metric()
    }
}

// const ALPHABET = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
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

    // const symbols = await ALPHABET.map( (ch)=> {
    //     const callback = Scene.root.findFirst(`letter_${ch.toLowerCase()}`)
    //     return{
    //         symUC: ch,
    //         symLC: ch.toLowerCase(),
    //         callback: callback
    //
    //     }
    //
    // })
    //
    // for (const item of symbols) {
    //     Diagnostics.log(item.symLC)
    //     TouchGestures.onTap(item.callback).subscribe(() => {
    //         touch(item.symUC, textObject, counter)
    //     });
    // }

    // for (const item of symbols) {
    //     Diagnostics.log(item.symUC)
    //     await TouchGestures.onTap(item.callback).subscribe(() => {
    //         touch(item.symUC, textObject, counter)
    //     });
    // }
    // await Patches.inputs.setScalar('counterSymbol', counterSymbol)

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
        if (work && string1 !== "|" && limit) {
            string1 = string1.substring(0, string1.length - 1)
            textObject.text = string1

            string1 = autoReturn(string1)

            string1 = string1 + " "
            Patches.inputs.setString('Text', string1)
            textObject.text = string1

            countSymbolString[nowString] += 1
            counterSymbol += 1
            Patches.inputs.setScalar('counterSymbol', counterSymbol)

            counter.text = (limitSymbol - counterSymbol).toString()

            if (limit === false) {
                return
            }
            string1 = string1 + "|"
            sleep(time).then(() => {
                textObject.text = string1
            });
            string1 = check(string1)
            metric()
        }
    });

    await TouchGestures.onTap(ret).subscribe(() => {
        if (limit && nowString < limitReturn) {
            string1 = string1.substring(0, string1.length - 1)
            textObject.text = string1

            string1 = string1 + "\n"
            Patches.inputs.setString('Text', string1)

            nowString += 1

            textObject.text = string1
            string1 = string1 + "|"

            sleep(time).then(() => {
                textObject.text = string1
            });
            metric()
        } else {
            Patches.inputs.setPulse('custPulse', Reactive.once())
        }
    });

    await TouchGestures.onTap(delet).subscribe(() => {
        if (string1 !== "|" && work) {
            Diagnostics.log(string1)
            if (limit) {
                string1 = string1.substring(0, string1.length - 1)
                textObject.text = string1
            }
            if (string1.slice(-1) === "\n" && work) {
                if (string1.slice(string1.slice(-1)-1) === "\n") {
                    string1 = string1.substring(0, string1.length - 1)
                    nowString -= 1
                } else {
                    string1 = string1.substring(0, string1.length - 2)
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
            Patches.inputs.setString('Text', string1)
            textObject.text = string1
            string1 = string1 + "|"
            sleep(time).then(() => {
                textObject.text = string1
            });
            counter.text = (limitSymbol - counterSymbol).toString()
            Patches.inputs.setScalar('counterSymbol', counterSymbol)
            metric()
        }
    });

    await TouchGestures.onTap(done).subscribe(() => {
        if (work === true) {
            work = false
            if (limit) {
                string1 = string1.substring(0, string1.length - 1)
                textObject.text = string1
            }
            metric()
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
            metric()
        }
    });
})();