const Patches = require('Patches');

import {CustomString} from "./customString";

export class blockOfStrings {
    constructor(
        constructorBlocks = [
            new CustomString(
                true
            ),
            new CustomString(),
            new CustomString(),
            new CustomString(),
            new CustomString()
        ],
        constructorBlockNumber = 0
    ) {
        this.block = constructorBlocks
        this.blockNumber = constructorBlockNumber
    }

    cursorChecker(string1) {
        if (string1[string1.length - 1] === '|') {
            return string1.substring(0, string1.length -1)
        }
        return string1
    }

    outputPatches(objectTxt, objectCounter) {
        Patches.inputs.setString('text_1', this.cursorChecker(this.block[0].text))
        Patches.inputs.setScalar('counterSymbol_1', this.block[0].counterSymbol)
        Patches.inputs.setString('text_2', this.cursorChecker(this.block[1].text))
        Patches.inputs.setScalar('counterSymbol_2', this.block[1].counterSymbol)
        Patches.inputs.setString('text_3', this.cursorChecker(this.block[2].text))
        Patches.inputs.setScalar('counterSymbol_3', this.block[2].counterSymbol)
        Patches.inputs.setString('text_4', this.cursorChecker(this.block[3].text))
        Patches.inputs.setScalar('counterSymbol_4', this.block[3].counterSymbol)
        Patches.inputs.setString('text_5', this.cursorChecker(this.block[4].text))
        Patches.inputs.setScalar('counterSymbol_5', this.block[4].counterSymbol)

        objectTxt.text = this.block[this.blockNumber].text
        objectCounter.text = (this.block[this.blockNumber].counterSymbol).toString()
    }

    swipeBlock(nowNumberBlock, textObject, counterObject) {
        if (this.blockNumber === nowNumberBlock) {
            if (this.block[nowNumberBlock].work === false) {
                this.block[this.blockNumber].doneButton()
            }
        }

        if (
            this.block[this.blockNumber].work === true &&
            this.block[nowNumberBlock].work === false
        ) {
            this.block[this.blockNumber].doneButton()
            this.outputPatches(textObject, counterObject)
            this.blockNumber = nowNumberBlock
            this.block[this.blockNumber].doneButton()
        }

        if (
            this.block[this.blockNumber].work === false &&
            this.block[nowNumberBlock].work === false
        ) {
            this.blockNumber = nowNumberBlock
            this.block[this.blockNumber].doneButton()
        }
    }
}