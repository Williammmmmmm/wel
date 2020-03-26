const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("gg");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("692767557169446993");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`>  Wélcome Tø Elite`), 9000)        
}
});

bot.login(process.env.BOT_TOKEN);
