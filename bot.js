const D1 = require('discord.js');
const p1 = new D1.Client();
console.info("oNNN1");
p1.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("683035809858977927");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send("ترحيب"), 12000)
}
});
p1.login(process.env.B);
