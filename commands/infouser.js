module.exports = {
    name: "infouser",
    description: "Renvoi les informations de l'utilisateur mentionne",
    execute(msg, arg){
        const usermentions =  msg.mentions.users.first();
        msg.channel.send(`Le tag de la  personne mentionner est : ${usermentions.tag}\nSon pseudo est : ${usermentions.username}`);
    }
}