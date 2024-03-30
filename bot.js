const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json'); // Asegúrate de tener un archivo config.json con tu token

client.once('ready', () => {
    console.log('¡El bot está listo!');
});

client.on('message', message => {
    // Si el mensaje no empieza con el prefijo o si el autor es un bot, sal del evento
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // Divide el comando y los argumentos
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // Comando "/hola"
    if (command === 'hola') {
        message.channel.send('¡Hola!');
    }
});

client.login(token);
