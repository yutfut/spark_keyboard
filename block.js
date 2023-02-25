const TimeModule = require('Time');
const Patches = require('Patches');

import {S} from "./s";

const time = 150

function sleep(ms) {
    return new Promise(resolve => TimeModule.setTimeout(resolve, ms));
}

export class blockOfStrings {
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

    cursorChecker(string1) {
        if (string1[string1.length - 1] === '|') {
            return string1.substring(0, string1.length -1)
        }
        return string1
    }

    outputPatches(objectTxt, objectCounter) {
        sleep(time).then(() => {
            // Patches.inputs.setString('text_1', this.block[0].text.substring(0, this.block[0].text.length - 1))
            Patches.inputs.setString('text_1', this.cursorChecker(this.block[0].text))
            Patches.inputs.setScalar('counterSymbol_1', this.block[0].counterSymbol)
            Patches.inputs.setString('text_2', this.block[1].text.substring(0, this.block[1].text.length - 1))
            Patches.inputs.setScalar('counterSymbol_2', this.block[1].counterSymbol)
            Patches.inputs.setString('text_3', this.block[2].text.substring(0, this.block[2].text.length - 1))
            Patches.inputs.setScalar('counterSymbol_3', this.block[2].counterSymbol)
            Patches.inputs.setString('text_4', this.block[3].text.substring(0, this.block[3].text.length - 1))
            Patches.inputs.setScalar('counterSymbol_4', this.block[3].counterSymbol)
            Patches.inputs.setString('text_5', this.block[4].text.substring(0, this.block[4].text.length - 1))
            Patches.inputs.setScalar('counterSymbol_5', this.block[4].counterSymbol)

            objectTxt.text = this.block[this.blockNumber].text
            objectCounter.text = (this.block[this.blockNumber].counterSymbol).toString()
        });
    }

    swipeBlock(nowNumberBlock) {
        if (this.blockNumber === nowNumberBlock) {
            if (this.block[nowNumberBlock].work === false) {
                this.block[nowNumberBlock].work = true
            }
        }

        if (
            this.block[this.blockNumber].work === true &&
            this.block[nowNumberBlock].work === false
        ) {
            this.block[this.blockNumber].doneButton()
            this.blockNumber = nowNumberBlock
            this.block[this.blockNumber].doneButton()
        }
    }
}