const Discord = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Discord.Client();


client.on("ready" , () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message" , msg => {
    if (msg.content === `${PREFIX}hello`) {
        msg.reply("BONJOUR MAITRE");
    }else if (msg.content === `${PREFIX}batar`) {
        msg.delete(msg);
        msg.reply(`Le message precedent a etait supprimer`);
    }else if(msg.content === `${PREFIX}help`){
        msg.reply("`\n Voicie les commande du bot \n !hello = Bonjour maitre \n !batar = suprime le dernier message \n !bonjour = Bonjour au grand maitre quand nono a ecrit \n !help = affiche les commande du bot`");
    }else if (msg.author.tag === "NONO70063#4609" && msg.content === `${PREFIX}bonjour`) {
        msg.reply(`Bonjour au grand maitre`);
    }else if(msg.content === `${PREFIX}bonjour`){
        msg.reply(`Tu n'est pa NONO`);
    }
});

client.login(TOKEN);