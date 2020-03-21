const D1 = require('discord.js');
const p1 = new D1.Client();
console.info("oNNN1");
p1.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("683035809858977927");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send("# - Wélcome Tø Hørizon ,,"), 2000)
}
});
p1.login("NjUyMTM3ODE1NTcxODI0NjQ5.XnXOIw.6HpoF1P1D2S7sGIplPI1QhXoC1M");
