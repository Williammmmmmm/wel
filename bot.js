const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("LooZ");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("683035809858977927");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`> **# - Wélcome Tø Hørizon ,,**`), 15000)        
}
});

bot.login(process.env.BOT_TOKEN);
