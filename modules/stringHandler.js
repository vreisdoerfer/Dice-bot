function amountHandler(messageHolder) {
    if (messageHolder.startsWith("d")) {
        return 1;
    }
    if (messageHolder.match(/^\d*/)[0] != null) {
        var amount = parseInt(messageHolder.match(/^\d*/)[0]);
        if(!isNaN(amount)) {
            if(amount > 400) {
                return 400
            }
        }
        return amount;
    }
    return undefined;
}

function typeHandler(messageHolder) {
    if ((messageHolder.match(/^[d]\d*/)) != null) {
        return messageHolder.match(/^[d]\d*/)[0];
    }
    return undefined;
}

function bonusHandler(messageHolder) {
    if (messageHolder.length > 0) {
        if (messageHolder.match(/^[+-]\d*$/) != null) {
            return parseInt(messageHolder.match(/^[+-]\d*$/));
        }
        return "invalid";
    }
    return 'omitted';
}

module.exports = {
    amountHandler: amountHandler,
    typeHandler: typeHandler,
    bonusHandler: bonusHandler
}