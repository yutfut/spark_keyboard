const Diagnostics = require('Diagnostics');

const debug = true

export function printString(text, counterSymbol) {
    if (debug) {
        Diagnostics.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
        for (let i = 0; i < counterSymbol; i++) {
            Diagnostics.log("(" + text[i] + ")")
        }
        Diagnostics.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    }
}

export function metric(work, limit, counterSymbol, countSymbolString, nowString, text) {
    if (debug) {
        Diagnostics.log("-----------------------------------------------")
        Diagnostics.log("work:              " + work)
        Diagnostics.log("limit:             " + limit)
        Diagnostics.log("counterSymbol:     " + counterSymbol)
        Diagnostics.log("countSymbolString: " + countSymbolString)
        Diagnostics.log("nowString:         " + nowString)
        Diagnostics.log("string:            " + text)
        printString(text, counterSymbol)
        Diagnostics.log("-----------------------------------------------")
    }
}

export function automaticLineTransferDebug(i, newString, string2) {
    if (debug) {
        Diagnostics.log("-----------------------------------------------")
        Diagnostics.log("i:             " + i)
        Diagnostics.log("newString:     " + newString)
        Diagnostics.log("string2:       " + string2)
        Diagnostics.log("-----------------------------------------------")
    }
}

export function tranferMetrics(counterSymbol, numberOfWhiteSpase, string1) {
    if (debug) {
        Diagnostics.log("-----------------------------------------------")
        Diagnostics.log("counterSymbol:" + counterSymbol)
        Diagnostics.log("numberOfWhiteSpase:" + numberOfWhiteSpase)
        Diagnostics.log("symbol:(" + string1[counterSymbol - numberOfWhiteSpase] + ")")
        Diagnostics.log("-----------------------------------------------")
    }
}

export function whiteSpaseFoundMetrics(numberOfWhiteSpase, counterSymbol, string1) {
    if (debug) {
        Diagnostics.log("White Space Found")
        Diagnostics.log("-----------------------------------------------")
        Diagnostics.log("numberOfWhiteSpace:    " + numberOfWhiteSpase)
        Diagnostics.log(counterSymbol - numberOfWhiteSpase)
        Diagnostics.log(string1[counterSymbol - numberOfWhiteSpase])
        Diagnostics.log("-----------------------------------------------")
    }
}

export function deletedWhiteSpaceMetrics(checkString, counterSymbol) {
    if (debug) {
        Diagnostics.log("Deleted white space")
        Diagnostics.log("-----------------------------------------------")
        Diagnostics.log(checkString)
        Diagnostics.log(counterSymbol)
        Diagnostics.log(checkString[counterSymbol - 1])
        printString()
        Diagnostics.log("-----------------------------------------------")
    }
}

export function vocabularyCheckMetrics(numberOfWhiteSpase, counterSymbol, checkString) {
    if (debug) {
        Diagnostics.log("-----------------------------------------------")
        Diagnostics.log("numberOfWhiteSpace:" + numberOfWhiteSpase)
        Diagnostics.log("counterSymbol:" + counterSymbol)
        Diagnostics.log("counterSymbol - numberOfWhiteSpace:" + (counterSymbol - numberOfWhiteSpase))
        Diagnostics.log("symbol:" + checkString[counterSymbol - numberOfWhiteSpase])
        Diagnostics.log("-----------------------------------------------")
    }
}