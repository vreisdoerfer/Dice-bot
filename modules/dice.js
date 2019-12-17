const stringHandler = require('./stringHandler.js');

function generateValues(message) {
    var messageHolder = message.content.replace(/ /g, "").replace("!", "").toLowerCase();

    var amount = stringHandler.amountHandler(messageHolder);
    messageHolder = messageHolder.replace(/^\d*/, "");

    var type = stringHandler.typeHandler(messageHolder);
    messageHolder = messageHolder.replace(/^[d]\d*/, "");

    var bonus = stringHandler.bonusHandler(messageHolder);

    if ((type === "d4" || type === "d6" || type === "d8" || type === "d10" || type === "d20" || type === "d100") && bonus != "invalid") {
        var valuesString = "",
            valuesBonusString = "";

        type = parseInt(type.replace("d", ""));

        if (!isNaN(amount) && amount != undefined && amount > 0) {
            for (var i = 0; i < amount; i++) {
                var valueHolder = Math.floor(Math.random() * (type) + 1);
                valuesString += valueHolder + "  ";
                if (!isNaN(bonus) && bonus != undefined) {
                    valueHolder += bonus;
                    valuesBonusString += valueHolder + "  ";
                }
            }
            var results = "Here are your results for " + amount + " d" + type + " " + message.author + ": " + "**" + valuesString + "**";
            if (valuesBonusString.length > 0) {
                results = "Here are your results for " + amount + " d" + type + " " + message.author + ": " + '\n' + "Without bonus: " + "**" + valuesString + "**" + '\n' + "With bonus of " + bonus + ": " + "**" + valuesBonusString + "**";
            }
            message.channel.send(results);
        }
    }
}

module.exports = {
    generateValues: generateValues
}