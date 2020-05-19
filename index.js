const fs = require("fs");
const Discord = require("discord.js");
const { TOKEN, PREFIX } = require("./config");

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles =fs.readdirSync("./commands").filter(file => file.endsWith(".js")); //renvoie tous les nom des fichier 
console.log(commandFiles);

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    console.log(`commande charge : ${command.name}`);
}

client.on("ready" , () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message" , msg => {
    const arg = msg.content.slice(PREFIX.length).split(/ +/); //cette variable va recupere les argumant derriere une comande ex: !user @nono
    console.log(arg);
    const command = arg.shift().toLowerCase(); // recupere la commande ex: !user
    console.log(command);

    if(!msg.content.startsWith(PREFIX) || msg.author.bot){   // va empecher le spam
        return;
    }
    if (!client.commands.has(command)) {
        msg.reply("La commande n'existe pas");
        return;
    }
    client.commands.get(command).execute(client ,msg, arg);
});

client.login(TOKEN);