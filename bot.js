const D1 = require('discord.js');






const p1 = new D1.Client();








    console.log("oNNN1");
p1.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("676525568791019521");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`> **# - Wélcome Tø Elite ,,**`), 2000)
}
});
















  client.login(process.env.BOT_TOKEN);
