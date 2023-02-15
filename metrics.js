const Diagnostics = require('Diagnostics');

const debug = true

export function printString(string1, counterSymbol) {
    Diagnostics.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    for(let i = 0; i < counterSymbol; i++) {
        Diagnostics.log("(" + string1[i] + ")")
    }
    Diagnostics.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
}

export function metric(work, limit, counterSymbol, countSymbolString, nowString, string1) {
    if (debug) {
        Diagnostics.log("-----------------------------------------------")
        Diagnostics.log("work:              " + work)
        Diagnostics.log("limit:             " + limit)
        Diagnostics.log("counterSymbol:     " + counterSymbol)
        Diagnostics.log("countSymbolString: " + countSymbolString)
        Diagnostics.log("nowString:         " + nowString)
        Diagnostics.log("string:            " + string1)
        printString(string1, counterSymbol)
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
    Diagnostics.log("-----------------------------------------------")
    Diagnostics.log("counterSymbol:" + counterSymbol)
    Diagnostics.log("numberOfWhiteSpase:" + numberOfWhiteSpase)
    Diagnostics.log("symbol:(" + string1[counterSymbol - numberOfWhiteSpase] + ")")
    Diagnostics.log("-----------------------------------------------")
}

export function whiteSpaseFoundMetrics(numberOfWhiteSpase, counterSymbol, string1) {
    Diagnostics.log("White Space Found")
    Diagnostics.log("-----------------------------------------------")
    Diagnostics.log("numberOfWhiteSpase:    " + numberOfWhiteSpase)
    Diagnostics.log(counterSymbol - numberOfWhiteSpase)
    Diagnostics.log(string1[counterSymbol - numberOfWhiteSpase])
    Diagnostics.log("-----------------------------------------------")
}

export function deletedWhiteSpaceMetrics(checkString, counterSymbol) {
    Diagnostics.log("Deleted white spase")
    Diagnostics.log("-----------------------------------------------")
    Diagnostics.log(checkString)
    Diagnostics.log(counterSymbol)
    Diagnostics.log(checkString[counterSymbol - 1])
    printString()
    Diagnostics.log("-----------------------------------------------")
}