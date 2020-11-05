const token = require('./credentials');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.channel.id === '773855406547533834') {
        if (msg.content === 'ping') {
            msg.reply(pong);
        }
    }
});

client.login(token);