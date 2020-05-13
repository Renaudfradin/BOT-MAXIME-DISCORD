const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready" , () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message" , msg => {
    if (msg.content === "hello") {
        msg.reply("BONJOUR MAITRE");
    }else if (msg.content === "batar") {
        msg.delete(msg);
        msg.reply(`Le message precedent a etait supprimer`);
    } 
});

client.login("token");