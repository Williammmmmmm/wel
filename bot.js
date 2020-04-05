 const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("621839367463501855");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`*You’re in **Riiich** , Welcome.*`), 4000)        
}
});

bot.login(process.env.BOT_TOKEN);// 
