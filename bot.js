const Discord = require('discord.js'),
Willy = new Discord.Client({sisableEveryone: true})
Willy.on('guildMemberAdd', member => {
console.log("Welcoming..");
const VVilly= member.guild.channels.get("573399652305731596");
if(!VVilly) return;
if(VVilly) {
setTimeout(() => VVilly.send(`ترحيب`), 1500)
}
});















p1.login("MzIzOTg3ODIzMTM5MDk0NTI5.XnOONA.0rq0nUTw_QHbCWyuf52ZHOEngiA");
p1.login(process.env.B);
