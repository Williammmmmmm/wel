const Discord = require('discord.js'),
Willy = new Discord.Client({sisableEveryone: true})
Willy.on('guildMemberAdd', member => {
console.log("Welcoming..");
const VVilly= member.guild.channels.get("573399652305731596");
if(!VVilly) return;
if(VVilly) {
setTimeout(() => VVilly.send(`ترحيب`), 15000)
}
});

p1.login(process.env.B);
