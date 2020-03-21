const Discord = require('discord.js'),
Willy = new Discord.Client({sisableEveryone: true})
Willy.on('guildMemberAdd', member => {
console.log("Welcoming..");
const VVilly= member.guild.channels.get("676525568791019521");
if(!VVilly) return;
if(VVilly) {
setTimeout(() => VVilly.send(`ترحيب`), 1500)
}
});


Willy.login("NjUyMTM3ODE1NTcxODI0NjQ5.XkFotA.8tnerBc4pXznY7yT9WyH4OxrxCs")
