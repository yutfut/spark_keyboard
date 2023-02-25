const Scene = require('Scene');
const TouchGestures = require('TouchGestures');

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

    const returnButton = await Scene.root.findFirst('return')
    const whiteSpaceButton = await Scene.root.findFirst('sps')
    const deleteButton = await Scene.root.findFirst('delete')

    let textObject;
    let counterObject;

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

    const done_block1 = await Scene.root.findFirst('done_block1')
    const edit_block1 = await Scene.root.findFirst('edit_block1')

    const done_block2 = await Scene.root.findFirst('done_block2')
    const edit_block2 = await Scene.root.findFirst('edit_block2')

    const done_block3 = await Scene.root.findFirst('done_block3')
    const edit_block3 = await Scene.root.findFirst('edit_block3')

    const done_block4 = await Scene.root.findFirst('done_block4')
    const edit_block4 = await Scene.root.findFirst('edit_block4')

    const done_block5 = await Scene.root.findFirst('done_block5')
    const edit_block5 = await Scene.root.findFirst('edit_block5')

    let B = new blockOfStrings()

    await TouchGestures.onTap(a).subscribe(() => {
        B.block[B.blockNumber].touch("A", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(b).subscribe(() => {
        B.block[B.blockNumber].touch("B", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(c).subscribe(() => {
        B.block[B.blockNumber].touch("C", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(d).subscribe(() => {
        B.block[B.blockNumber].touch("D", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(e).subscribe(() => {
        B.block[B.blockNumber].touch("E", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(f).subscribe(() => {
        B.block[B.blockNumber].touch("F", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(g).subscribe(() => {
        B.block[B.blockNumber].touch("G", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(h).subscribe(() => {
        B.block[B.blockNumber].touch("H", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(i).subscribe(() => {
        B.block[B.blockNumber].touch("I", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(j).subscribe(() => {
        B.block[B.blockNumber].touch("J", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(k).subscribe(() => {
        B.block[B.blockNumber].touch("K", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(l).subscribe(() => {
        B.block[B.blockNumber].touch("L", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(m).subscribe(() => {
        B.block[B.blockNumber].touch("M", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(n).subscribe(() => {
        B.block[B.blockNumber].touch("N", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(o).subscribe(() => {
        B.block[B.blockNumber].touch("O", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(p).subscribe(() => {
        B.block[B.blockNumber].touch("P", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(q).subscribe(() => {
        B.block[B.blockNumber].touch("Q", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(r).subscribe(() => {
        B.block[B.blockNumber].touch("R", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(s).subscribe(() => {
        B.block[B.blockNumber].touch("S", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(t).subscribe(() => {
        B.block[B.blockNumber].touch("T", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(u).subscribe(() => {
        B.block[B.blockNumber].touch("U", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(v).subscribe(() => {
        B.block[B.blockNumber].touch("V", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(w).subscribe(() => {
        B.block[B.blockNumber].touch("W", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(x).subscribe(() => {
        B.block[B.blockNumber].touch("X", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(y).subscribe(() => {
        B.block[B.blockNumber].touch("Y", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(z).subscribe(() => {
        B.block[B.blockNumber].touch("Z", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(whiteSpaceButton).subscribe(() => {
        B.block[B.blockNumber].whiteSpace(textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(returnButton).subscribe(() => {
        B.block[B.blockNumber].lineBreak(textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(deleteButton).subscribe(() => {
        B.block[B.blockNumber].deleteSymbol(textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    await TouchGestures.onTap(dot).subscribe(() => {
        B.block[B.blockNumber].touch(",", textObject, counterObject)
        B.outputPatches(textObject, counterObject)
    });

    // 0
    await TouchGestures.onTap(done_block1).subscribe(() => {
        B.block[0].doneButton()
    });

    await TouchGestures.onTap(edit_block1).subscribe(() => {
        const nowNumberBlock = 0
        textObject = textObject1
        counterObject = counterObject1
        B.swipeBlock(nowNumberBlock)

    });

    // 1
    await TouchGestures.onTap(done_block2).subscribe(() => {
        B.block[1].doneButton(textObject, counterObject)
    });

    await TouchGestures.onTap(edit_block2).subscribe(() => {
        const nowNumberBlock = 1
        textObject = textObject2
        counterObject = counterObject2
        B.swipeBlock(nowNumberBlock)
    });

    // 2
    await TouchGestures.onTap(done_block3).subscribe(() => {
        // B.block[B.blockNumber].doneButton(textObject, counterObject)
        B.block[2].doneButton(textObject, counterObject)
    });

    await TouchGestures.onTap(edit_block3).subscribe(() => {
        const nowNumberBlock = 2
        textObject = textObject3
        counterObject = counterObject3
        B.swipeBlock(nowNumberBlock)
    });

    // 3
    await TouchGestures.onTap(done_block4).subscribe(() => {
        // B.block[B.blockNumber].doneButton(textObject, counterObject)
        B.block[3].doneButton(textObject, counterObject)
    });

    await TouchGestures.onTap(edit_block4).subscribe(() => {
        const nowNumberBlock = 3
        textObject = textObject4
        counterObject = counterObject4
        B.swipeBlock(nowNumberBlock)
    });

    // 4
    await TouchGestures.onTap(done_block5).subscribe(() => {
        // B.block[B.blockNumber].doneButton(textObject, counterObject)
        B.block[B.blockNumber].doneButton(textObject, counterObject)
    });

    await TouchGestures.onTap(edit_block5).subscribe(() => {
        const nowNumberBlock = 4
        textObject = textObject5
        counterObject = counterObject5
        B.swipeBlock(nowNumberBlock)
    });
})();
