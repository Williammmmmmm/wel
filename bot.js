
const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("LooZ");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("696699081367617601");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send("*You’re in **Riiich** , Welcome.*"), 4000)
}
});

bot.login(process.env.BOT_TOKEN);
