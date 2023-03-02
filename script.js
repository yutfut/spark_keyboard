const Scene = require('Scene');
const TouchGestures = require('TouchGestures');

const Patches = require('Patches');

import {blockOfStrings} from './block'

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

    // Доп символы

    const tire = await Scene.root.findFirst('tire')
    const apostrof = await Scene.root.findFirst('apostrof')
    const vopros = await Scene.root.findFirst('vopros')
    const dvoetochie = await Scene.root.findFirst('dvoetochie')
    const tri = await Scene.root.findFirst('tri')
    const tochkazapataya = await Scene.root.findFirst('tochkazapataya')
    const ckobka1 = await Scene.root.findFirst('ckobka1')
    const ckobka2 = await Scene.root.findFirst('ckobka2')
    const vosem = await Scene.root.findFirst('vosem')
    const dollar = await Scene.root.findFirst('dollar')
    const and = await Scene.root.findFirst('and')
    const ad = await Scene.root.findFirst('ad')
    const ravno = await Scene.root.findFirst('ravno')
    const devyat = await Scene.root.findFirst('devyat')
    const nol = await Scene.root.findFirst('nol')
    const odin = await Scene.root.findFirst('odin')
    const chetyre = await Scene.root.findFirst('chetyre')
    const slash = await Scene.root.findFirst('slash')
    const pyat = await Scene.root.findFirst('pyat')
    const sem = await Scene.root.findFirst('sem')
    const vosklitsatelnyi = await Scene.root.findFirst('vosklitsatelnyi')
    const dva = await Scene.root.findFirst('dva')
    const shest = await Scene.root.findFirst('shest')
    const zapataya = await Scene.root.findFirst('zapataya')
    const plys = await Scene.root.findFirst('plys')

    // конец

    const returnButton = await Scene.root.findFirst('return')
    const whiteSpaceButton = await Scene.root.findFirst('sps')
    const deleteButton = await Scene.root.findFirst('delete')

    const textObject1 = await Scene.root.findFirst('text_block1')
    const counterObject1 = await Scene.root.findFirst('counter_block1')

    const textObject2 = await Scene.root.findFirst('text_block2')
    const counterObject2 = await Scene.root.findFirst('counter_block2')

    const textObject3 = await Scene.root.findFirst('text_block3')
    const counterObject3 = await Scene.root.findFirst('counter_block2')

    const textObject4 = await Scene.root.findFirst('text_block4')
    const counterObject4 = await Scene.root.findFirst('counter_block2')

    const textObject5 = await Scene.root.findFirst('text_block5')
    const counterObject5 = await Scene.root.findFirst('counter_block2')

    let textObject = textObject1;
    let counterObject = counterObject1;

    const done_block1 = await Scene.root.findFirst('done_block1')

    const done_block2 = await Scene.root.findFirst('done_block2')

    const done_block3 = await Scene.root.findFirst('done_block3')

    const done_block4 = await Scene.root.findFirst('done_block4')

    const done_block5 = await Scene.root.findFirst('done_block5')

    let Block = new blockOfStrings()

    await TouchGestures.onTap(a).subscribe(() => {
        Block.block[Block.blockNumber].touch("A")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(b).subscribe(() => {
        Block.block[Block.blockNumber].touch("Block")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(c).subscribe(() => {
        Block.block[Block.blockNumber].touch("C")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(d).subscribe(() => {
        Block.block[Block.blockNumber].touch("D")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(e).subscribe(() => {
        Block.block[Block.blockNumber].touch("E")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(f).subscribe(() => {
        Block.block[Block.blockNumber].touch("F")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(g).subscribe(() => {
        Block.block[Block.blockNumber].touch("G")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(h).subscribe(() => {
        Block.block[Block.blockNumber].touch("H")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(i).subscribe(() => {
        Block.block[Block.blockNumber].touch("I")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(j).subscribe(() => {
        Block.block[Block.blockNumber].touch("J")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(k).subscribe(() => {
        Block.block[Block.blockNumber].touch("K")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(l).subscribe(() => {
        Block.block[Block.blockNumber].touch("L")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(m).subscribe(() => {
        Block.block[Block.blockNumber].touch("M")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(n).subscribe(() => {
        Block.block[Block.blockNumber].touch("N")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(o).subscribe(() => {
        Block.block[Block.blockNumber].touch("O")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(p).subscribe(() => {
        Block.block[Block.blockNumber].touch("P")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(q).subscribe(() => {
        Block.block[Block.blockNumber].touch("Q")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(r).subscribe(() => {
        Block.block[Block.blockNumber].touch("R")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(s).subscribe(() => {
        Block.block[Block.blockNumber].touch("S")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(t).subscribe(() => {
        Block.block[Block.blockNumber].touch("T")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(u).subscribe(() => {
        Block.block[Block.blockNumber].touch("U")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(v).subscribe(() => {
        Block.block[Block.blockNumber].touch("V")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(w).subscribe(() => {
        Block.block[Block.blockNumber].touch("W")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(x).subscribe(() => {
        Block.block[Block.blockNumber].touch("X")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(y).subscribe(() => {
        Block.block[Block.blockNumber].touch("Y")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(z).subscribe(() => {
        Block.block[Block.blockNumber].touch("Z")
        Block.outputPatches(textObject, counterObject)
    });

    //доп символы

    await TouchGestures.onTap(tire).subscribe(() => {
        Block.block[Block.blockNumber].touch("-")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(apostrof).subscribe(() => {
        Block.block[Block.blockNumber].touch("'")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(vopros).subscribe(() => {
        Block.block[Block.blockNumber].touch("?")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(dvoetochie).subscribe(() => {
        Block.block[Block.blockNumber].touch(":")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(tri).subscribe(() => {
        Block.block[Block.blockNumber].touch("3")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(tochkazapataya).subscribe(() => {
        Block.block[Block.blockNumber].touch(";")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(ckobka1).subscribe(() => {
        Block.block[Block.blockNumber].touch("(")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(ckobka2).subscribe(() => {
        Block.block[Block.blockNumber].touch(")")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(vosem).subscribe(() => {
        Block.block[Block.blockNumber].touch("8")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(dollar).subscribe(() => {
        Block.block[Block.blockNumber].touch("$")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(and).subscribe(() => {
        Block.block[Block.blockNumber].touch("&")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(ad).subscribe(() => {
        Block.block[Block.blockNumber].touch("@")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(ravno).subscribe(() => {
        Block.block[Block.blockNumber].touch("=")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(devyat).subscribe(() => {
        Block.block[Block.blockNumber].touch("9")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(nol).subscribe(() => {
        Block.block[Block.blockNumber].touch("0")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(odin).subscribe(() => {
        Block.block[Block.blockNumber].touch("1")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(chetyre).subscribe(() => {
        Block.block[Block.blockNumber].touch("4")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(slash).subscribe(() => {
        Block.block[Block.blockNumber].touch("/")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(pyat).subscribe(() => {
        Block.block[Block.blockNumber].touch("5")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(sem).subscribe(() => {
        Block.block[Block.blockNumber].touch("7")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(vosklitsatelnyi).subscribe(() => {
        Block.block[Block.blockNumber].touch("!")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(dva).subscribe(() => {
        Block.block[Block.blockNumber].touch("2")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(shest).subscribe(() => {
        Block.block[Block.blockNumber].touch("6")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(zapataya).subscribe(() => {
        Block.block[Block.blockNumber].touch(",")
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(plys).subscribe(() => {
        Block.block[Block.blockNumber].touch("+")
        Block.outputPatches(textObject, counterObject)
    });

    //конец

    await TouchGestures.onTap(whiteSpaceButton).subscribe(() => {
        Block.block[Block.blockNumber].whiteSpace()
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(returnButton).subscribe(() => {
        Block.block[Block.blockNumber].lineBreak()
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(deleteButton).subscribe(() => {
        Block.block[Block.blockNumber].deleteSymbol()
        Block.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(dot).subscribe(() => {
        Block.block[Block.blockNumber].touch(".")
        Block.outputPatches(textObject, counterObject)
    });

    // 0
    await TouchGestures.onTap(done_block1).subscribe(() => {
        Block.block[0].doneButton()
        Block.outputPatches(textObject, counterObject)
    });

    let create_1_text = await Patches.outputs.getPulse('create_1_text');
    create_1_text.subscribe(() => {
        const nowNumberBlock = 0

        Block.swipeBlock(nowNumberBlock, textObject, counterObject)

        textObject = textObject1
        counterObject = counterObject1

        Block.outputPatches(textObject, counterObject)
    });

    // 1
    await TouchGestures.onTap(done_block2).subscribe(() => {
        Block.block[1].doneButton(textObject, counterObject)
        Block.outputPatches(textObject, counterObject)
    });

    let create_2_text = await Patches.outputs.getPulse('create_2_text');
    create_2_text.subscribe(() => {
        const nowNumberBlock = 1

        Block.swipeBlock(nowNumberBlock, textObject, counterObject)

        textObject = textObject2
        counterObject = counterObject2

        Block.outputPatches(textObject, counterObject)
    });

    // 2
    await TouchGestures.onTap(done_block3).subscribe(() => {
        Block.block[2].doneButton(textObject, counterObject)
        Block.outputPatches(textObject, counterObject)
    });

    let create_3_text = await Patches.outputs.getPulse('create_3_text');
    create_3_text.subscribe(() => {
        const nowNumberBlock = 2

        Block.swipeBlock(nowNumberBlock, textObject, counterObject)

        textObject = textObject3
        counterObject = counterObject3

        Block.outputPatches(textObject, counterObject)
    });

    // 3
    await TouchGestures.onTap(done_block4).subscribe(() => {
        Block.block[3].doneButton(textObject, counterObject)
        Block.outputPatches(textObject, counterObject)
    });

    let create_4_text = await Patches.outputs.getPulse('create_4_text');
    create_4_text.subscribe(() => {
        const nowNumberBlock = 3

        Block.swipeBlock(nowNumberBlock, textObject, counterObject)

        textObject = textObject4
        counterObject = counterObject4

        Block.outputPatches(textObject, counterObject)
    });

    // 4
    await TouchGestures.onTap(done_block5).subscribe(() => {
        Block.block[4].doneButton(textObject, counterObject)
        Block.outputPatches(textObject, counterObject)
    });

    let create_5_text = await Patches.outputs.getPulse('create_5_text');
    create_5_text.subscribe(() => {
        const nowNumberBlock = 4

        Block.swipeBlock(nowNumberBlock, textObject, counterObject)

        textObject = textObject5
        counterObject = counterObject5

        Block.outputPatches(textObject, counterObject)
    });
})();