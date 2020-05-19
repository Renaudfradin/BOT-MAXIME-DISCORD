module.exports = {
    name: "help",
    description: "Affiche les differente commande du bot",
    execute(client,msg, arg){
        msg.reply("`\n Voicie les commande du bot :\n !hello = Bonjour o grand maitre quand nono parle et quand c'est une autre Bonjour \n !batar = suprime le dernier message \n !help = affiche les commande du bot \n !infouser @user = affiche les les informations de la personne mentionné \n !user = affiche le tag et le pseudo \n !server = affiche le nom du serveur est le nombres de membres`");
    }
}