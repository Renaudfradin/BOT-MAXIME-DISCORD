module.exports = {
    name: "server",
    description: "Affiche le nom du serveur est le nombres de membres",
    execute(msg, arg){
        msg.channel.send(`Le nom du serveur est : ${msg.guild.name}\nIl y a ${msg.guild.memberCount} membres`);
    }
}