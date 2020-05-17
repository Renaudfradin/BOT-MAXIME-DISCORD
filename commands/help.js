module.exports = {
    name: "help",
    description: "Affiche les differente commande du bot",
    execute(msg, arg){
        msg.reply("`\n Voicie les commande du bot \n !hello = Bonjour au grand maitre quand nono parle et quand c'est une autre bonjour \n !batar = suprime le dernier message \n !help = affiche les commande du bot`");
    }
}