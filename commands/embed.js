const {MessageEmbed , MessageAttachment} = require("discord.js");
const Img = new MessageAttachment("./assets/img/Capture.PNG");
const nombreramdom = () => Math.floor(Math.random() * 6) + 1;

module.exports = {
    name: "embed",
    description: "Renvoi une image",
    execute(client,msg, arg){
        const embed = new MessageEmbed()
            .setColor("#000000")
            .setTitle("Ramdom")
            .attachFiles(Img)
            .setThumbnail('attachment://Capture.png')
            //.setThumbnail(client.user.displayAvatarURL())
            .setDescription("Je suis la descriptiuons")
            
            .addField("Je suis le champs" , "Je suis la valeur ")
            .addFields(
                {name: "1", value: nombreramdom()},
                {name: "1", value: nombreramdom()},
                {name: "1", value: nombreramdom()},
                {name: "4", value: nombreramdom()},
                {name: "5", value: nombreramdom()},
                {name: "6", value: nombreramdom()}
            )

            
            .setTimestamp()
            .setFooter("je suis le pied du footer");

            msg.channel.send(embed);
    }
}