const D1 = require('discord.js');






const p1 = new D1.Client();








    console.log("oNNN1");
p1.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("645729148429402112");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`**i don't wanna be you anymore**`), 2000)
}
});
















p1.login(process.env.B);

