const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "*"


client.on('ready', function() {
    console.log(`i am ready ${client.user.username}`);
});

client.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("693068099745742933");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send("> **# - Wélcome Tø Hørizon ,,**"), 2000)
}
});

client.login(process.env.BOT_TOKEN);
