const Discord = require('discord.js');
const config = require('./config.json');
const dice = require('./modules/dice.js');
const help = require('./modules/help.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', function(message) {
    if (!message.author.bot) {
        if(message.content.startsWith(config.prefix)) {
            if(message.content === "!burrão") {
                message.channel.send(help.showHelpTips());
            } else {
                dice.generateValues(message);
            }
        }
    }
})

client.login(config.token);