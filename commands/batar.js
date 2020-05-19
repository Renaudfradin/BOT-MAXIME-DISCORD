module.exports = {
    name: "batar",
    description: "Suprime le dernier message",
    execute(msg, arg){
        msg.delete(client,msg);
        msg.reply(`Le message precedent a etait supprimer`);
    }
}