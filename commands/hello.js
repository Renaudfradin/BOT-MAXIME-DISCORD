module.exports = {
    name: "hello",
    description: "Quand nono parle le bot dit : Bonjour au grand maitre et quand c'est une autre personne le bot dit : bonjour",
    execute(msg, arg){
        if (msg.author.tag === "NONO70063#4609") {
            msg.reply(`Bonjour ô grand maitre NONO`);
        }else{
            msg.reply(`Bonjour`);
        }
    }
}