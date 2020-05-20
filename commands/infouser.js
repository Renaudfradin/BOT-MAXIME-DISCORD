const {MessageEmbed, MessageAttachment} = require("discord.js");
//const Img = new MessageAttachment("./assets/img/VisualEditor_-_Icon__Help.svg.png");
module.exports = {
    name: "infouser",
    description: "Renvoi les informations de l'utilisateur mentionne",
    execute(client,msg, arg){
        const userinfos =  msg.mentions.users.first();
        if (userinfos.bot == true) {
            msg.channel.send("Les informations que vous essayer d'obtenir sont confidentiels");
        }else if (userinfos.bot == false){
            msg.channel.send(`Le tag de la  personne mentionner est : ${userinfos.tag}\nSon pseudo est : ${userinfos.username} \nSon derniée message est : ${userinfos.lastMessage}`)
        }
    }
}