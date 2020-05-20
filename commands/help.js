const {MessageEmbed, MessageAttachment} = require("discord.js");
const Img = new MessageAttachment("./assets/img/VisualEditor_-_Icon__Help.svg.png");
module.exports = {
    name: "help",
    description: "Affiche les differente commande du bot",
    execute(client,msg, arg){
        const embed = new MessageEmbed()
            .setColor("#3A57DA")
            .setTitle("Les commande du bot MaXiMe : ")
            .setURL("https://github.com/Renaudfradin")
            .attachFiles(Img)
            .setThumbnail('attachment://VisualEditor_-_Icon__Help.svg.png')
            //.setThumbnail(client.user.displayAvatarURL())
            .setDescription("!hello = Bonjour o grand maitre quand nono parle et quand c'est une autre Bonjour\n !batar = suprime le dernier message \n !user = affiche le tag et le pseudo \n !infouser @user = affiche les les informations de la personne mentionné \n !server = affiche le nom du serveur est le nombres de membres \n !help = affiche les commande du bot")
            .setFooter("Bot réalisé par Nono");

            msg.channel.send(embed);
    }
}