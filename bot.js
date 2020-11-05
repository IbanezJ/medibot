const Discord = require('discord.js');
const axios = require("axios");
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.channel.id === '773855406547533834') {
        if (msg.content === 'ping') {
            msg.reply(pong);
        }
        if (msg.content === 'test post') {
            axios
                .post('http://medivel-api.ma4q2u78nv.eu-west-3.elasticbeanstalk.com/api/v1/auth/login', {
                    username: "user@user.user",
                    password: "user"
                })
                .then(res => {
                    console.log(res.status);
                    console.log(res.data);
                })
                .catch(error => {
                    console.error(error);
                })
        }
    }
});

client.login(process.env.MEDIBOT_TOKEN);