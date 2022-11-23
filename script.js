const Scene = require('Scene');
const TouchGestures = require('TouchGestures');
const Diagnostics = require('Diagnostics');
const TimeModule = require('Time');

function sleep(ms) {
    return new Promise(resolve => TimeModule.setTimeout(resolve, ms));
}

// function sleep (time) {
//     return new Promise((resolve) => setTimeout(resolve, time));
// }

(async function () {
    const time = 150
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

    let string1;
    string1 = "|";

    await TouchGestures.onTap(a).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + "A"
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });

    await TouchGestures.onTap(b).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + "B"
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });

    await TouchGestures.onTap(c).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + "C"
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });

    await TouchGestures.onTap(d).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + "D"
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });

    await TouchGestures.onTap(e).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + "E"
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });

    await TouchGestures.onTap(f).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + "F"
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });

    await TouchGestures.onTap(g).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + "G"
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });

    await TouchGestures.onTap(h).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + "H"
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });

    await TouchGestures.onTap(i).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + "I"
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });

    await TouchGestures.onTap(j).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + "J"
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });

    await TouchGestures.onTap(k).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + "K"
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });

    await TouchGestures.onTap(l).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + "L"
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });

    await TouchGestures.onTap(m).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + "M"
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });

    await TouchGestures.onTap(n).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + "N"
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });

    await TouchGestures.onTap(o).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + "O"
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });

    await TouchGestures.onTap(p).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + "P"
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });

    await TouchGestures.onTap(r).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + "R"
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });

    await TouchGestures.onTap(s).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + "S"
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });

    await TouchGestures.onTap(t).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + "T"
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });

    await TouchGestures.onTap(u).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + "U"
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });

    await TouchGestures.onTap(w).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + "W"
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });

    await TouchGestures.onTap(x).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + "X"
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });

    await TouchGestures.onTap(y).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + "Y"
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
    });

    await TouchGestures.onTap(z).subscribe(() => {
        string1 = string1.substring(0, string1.length - 1)
        textObject.text = string1
        string1 = string1 + "Z"
        textObject.text = string1
        string1 = string1 + "|"
        sleep(time).then(() => {
            textObject.text = string1
        });
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
