const Scene = require('Scene');
const TouchGestures = require('TouchGestures');
const Diagnostics = require('Diagnostics');
const TimeModule = require('Time');

let work = true
let string1 = "|"
const time = 150

function sleep(ms) {
    return new Promise(resolve => TimeModule.setTimeout(resolve, ms));
}

function autoReturn(checkString) {
    if (checkString.length === 14 || checkString.length === 29 || checkString.length === 44) {
        checkString = checkString + "\n"
    }
    return checkString
}

function check(checkString) {
    if (checkString.length === 48) {
        checkString = checkString.substring(0, checkString.length - 1)
        work = false
    }
    return checkString
}

function touch(sybbol, objectTxt) {
    if (work) {
        string1 = string1.substring(0, string1.length - 1)
        objectTxt.text = string1
        string1 = string1 + sybbol
        objectTxt.text = string1
        string1 = autoReturn(string1)
        string1 = string1 + "|"
        sleep(time).then(() => {
            objectTxt.text = string1
        });
        string1 = check(string1)
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
    const r = await Scene.root.findFirst('letter_r')
    const s = await Scene.root.findFirst('letter_s')
    const t = await Scene.root.findFirst('letter_t')
    const u = await Scene.root.findFirst('letter_u')
    const v = await Scene.root.findFirst('letter_v')
    const w = await Scene.root.findFirst('letter_w')
    const x = await Scene.root.findFirst('letter_x')
    const y = await Scene.root.findFirst('letter_y')
    const z = await Scene.root.findFirst('letter_z')

    const space = await Scene.root.findFirst('space')
    const ret = await Scene.root.findFirst('return')
    const del = await Scene.root.findFirst('delete')

    const textObject = await Scene.root.findFirst('3dText0')

    await TouchGestures.onTap(a).subscribe(() => {
        touch("A", textObject)
    });

    await TouchGestures.onTap(b).subscribe(() => {
        touch("B", textObject)
    });

    await TouchGestures.onTap(c).subscribe(() => {
        touch("С", textObject)
    });

    await TouchGestures.onTap(d).subscribe(() => {
        touch("D", textObject)
    });

    await TouchGestures.onTap(e).subscribe(() => {
        touch("E", textObject)
    });

    await TouchGestures.onTap(f).subscribe(() => {
        touch("F", textObject)
    });

    await TouchGestures.onTap(g).subscribe(() => {
        touch("G", textObject)
    });

    await TouchGestures.onTap(h).subscribe(() => {
        touch("H", textObject)
    });

    await TouchGestures.onTap(i).subscribe(() => {
        touch("I", textObject)
    });

    await TouchGestures.onTap(j).subscribe(() => {
        touch("J", textObject)
    });

    await TouchGestures.onTap(k).subscribe(() => {
        touch("K", textObject)
    });

    await TouchGestures.onTap(l).subscribe(() => {
        touch("L", textObject)
    });

    await TouchGestures.onTap(m).subscribe(() => {
        touch("M", textObject)
    });

    await TouchGestures.onTap(n).subscribe(() => {
        touch("N", textObject)
    });

    await TouchGestures.onTap(o).subscribe(() => {
        touch("O", textObject)
    });

    await TouchGestures.onTap(p).subscribe(() => {
        touch("P", textObject)
    });

    await TouchGestures.onTap(r).subscribe(() => {
        touch("R", textObject)
    });

    await TouchGestures.onTap(s).subscribe(() => {
        touch("S", textObject)
    });

    await TouchGestures.onTap(t).subscribe(() => {
        touch("T", textObject)
    });

    await TouchGestures.onTap(u).subscribe(() => {
        touch("U", textObject)
    });

    await TouchGestures.onTap(w).subscribe(() => {
        touch("W", textObject)
    });

    await TouchGestures.onTap(x).subscribe(() => {
        touch("X", textObject)
    });

    await TouchGestures.onTap(y).subscribe(() => {
        touch("Y", textObject)
    });

    await TouchGestures.onTap(z).subscribe(() => {
        touch("Z", textObject)
    });

    await TouchGestures.onTap(space).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + " "
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });

    await TouchGestures.onTap(ret).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + "\n"
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });

    await TouchGestures.onTap(del).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        if (string1.slice(-1) === "\n") {
            string1 = string1.substring(0, string1.length - 2)
        } else {
            string1 = string1.substring(0, string1.length - 1)
        }
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });
})();
