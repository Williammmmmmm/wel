const Discord = require('discord.js'),
Willy = new Discord.Client({sisableEveryone: true})
Willy.on('guildMemberAdd', member => {
console.log("Welcoming..");
const VVilly= member.guild.channels.get("676525568791019521");
if(!VVilly) return;
if(VVilly) {
setTimeout(() => VVilly.send(`**.Welcome to Elite **`), 1500)
}
});
















p1.login(process.env.B);
