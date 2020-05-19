module.exports = {
    name: "user",
    description: "Affiche le tag et le pseudo de la peronne qui a taper la commande",
    execute(client,msg, arg){
        msg.channel.send(`Votre tag est : ${msg.author.tag}\nVotre pseudo est : ${msg.author.username}`);
    }
}