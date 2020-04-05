const D1 = require('discord.js');
const p1 = new D1.Client();
console.info("oNNN1");
p1.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("696311055277752363");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send("# - Wélcome Tø Hørizon ,,"), 2000)
}
});
bot.login(process.env.BOT_TOKEN);//
