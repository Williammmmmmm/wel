const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("gg");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("683035809858977927");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`ترحيب`), 9000)        
}
});

bot.login(process.env.BOT_TOKEN);
