const Diagnostics = require('Diagnostics');
const Patches = require('Patches');
const Reactive = require('Reactive');

import {
    deletedWhiteSpaceMetrics,
    metric, printString,
    tranferMetrics,
    vocabularyCheckMetrics,
    whiteSpaseFoundMetrics
} from "./metrics";

const dict = {
    "FUCK": "$%#&",
    "SHIT": "SH*T",
    "FUCKED": "F*CKED",
    "FUCKING": "F*CKING"
}

export class CustomString {
    constructor(
        constructorWork = false,
        constructorLimit = true,
        constructorText = "",
        constructorLimitReturn = 2,
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

    checkOfLimit() {
        if (this.countSymbolString[2] === 22) {
            this.limit = false
        }
    }

    autoReturn() {
        let checkString = this.text

        if (this.nowString === this.limitReturn &&
            this.countSymbolString[this.nowString] === 21) {
            this.limit = false
            this.text = checkString
            return
        }

        if (this.countSymbolString[this.nowString] === 22) {
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
            for (;numberOfWhiteSpace < 22; numberOfWhiteSpace++) {
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
        for (;numberOfWhiteSpace < 22; numberOfWhiteSpace++) {

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

    touch(symbol) {
        if (this.work && this.limit) {
            this.text = this.text.substring(0, this.text.length - 1)

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

            this.checkOfLimit()

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
            Diagnostics.log("CASTPULSE")
        }
    }

    whiteSpace() {
        if (this.work && this.text !== "|" && this.limit) {

            this.text = this.text.substring(0, this.text.length - 1)

            this.vocabularyCheck()

            if (this.countSymbolString[this.nowString] === 14) {
                this.text += "\n"
                this.counterSymbol += 1
                this.nowString += 1
            } else {
                this.text = this.text + " "
                this.countSymbolString[this.nowString] += 1
                this.counterSymbol += 1
            }

            if (this.limit === true) {
                this.text = this.text + "|"
            }

            this.checkOfLimit()

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
            Diagnostics.log("CASTPULSE")
        }
    }

    deleteSymbol() {
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

    lineBreak() {
        if (this.limit && this.nowString < this.limitReturn) {
            this.text = this.text.substring(0, this.text.length - 1)

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
            Diagnostics.log("CASTPULSE")
        }
    }

    doneButton() {
        if (this.work === true) {
            this.work = false
            if (this.limit) {
                this.text = this.text.substring(0, this.text.length - 1)
                this.vocabularyCheck()
            }

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