const fs = require("fs");
const Discord = require("discord.js");
const { TOKEN, PREFIX } = require("./config");

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.on("ready" , () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message" , msg => {
    const arg = msg.content.slice(PREFIX.length).split(/ +/); //cette variable va recupere les argumant derriere une comande ex: !user @nono
    console.log(arg);
    const command = arg.shift().toLowerCase(); // recupere la commande ex: !user
    console.log(command);

    if(!msg.content.startsWith(PREFIX) || msg.author.bot){   // va empecher le spam
        return;
    }

    if (msg.content === `${PREFIX}batar`) {
        msg.delete(msg);
        msg.reply(`Le message precedent a etait supprimer`);
    }else if(msg.content === `${PREFIX}help`){
        msg.reply("`\n Voicie les commande du bot \n !hello = Bonjour au grand maitre quand nono parle et quand c'est une autre bonjour \n !batar = suprime le dernier message \n !help = affiche les commande du bot`");
    }else if (msg.author.tag === "NONO70063#4609" && msg.content === `${PREFIX}hello`) {
        msg.reply(`Bonjour ô grand maitre NONO`);
    }else if(msg.content === `${PREFIX}hello`){
        msg.reply(`Bonjour`);
    }else if(command === "server"){
        msg.channel.send(`Le nom du serveur est : ${msg.guild.name}\nIl y a ${msg.guild.memberCount} membres`);
    }
    else if(command === "user"){
        msg.channel.send(`Votre tag est : ${msg.author.tag}\nVotre pseudo est : ${msg.author.username}`);
    }else if (command === "infouser") {
       const usermentions =  msg.mentions.users.first();
       msg.channel.send(`Le tag de la  personne mentionner est : ${usermentions.tag}\nSon pseudo est : ${usermentions.username}`);
    }else if (command === "connect") {
        
    }
});

client.login(TOKEN);