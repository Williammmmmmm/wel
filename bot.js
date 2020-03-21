const Discord = require('discord.js'),
Willy = new Discord.Client({sisableEveryone: true})
Willy.on('guildMemberAdd', member => {
console.log("Welcoming..");
const VVilly= member.guild.channels.get("683035809858977927");
if(!VVilly) return;
if(VVilly) {
setTimeout(() => VVilly.send(`ترحيب`), 1500)
}
});


Willy.login("mfa.Krz1R_YLGyF3TZIhjD4zvPRHvpDhhgl_p2iYfBB5fpNyDuWtdpf-V7kl3x61tWCLxdfDZLwqQFyZqpbR4GBj")
