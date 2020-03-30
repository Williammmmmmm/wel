const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("LooZ");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("694019686081232959");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`*ffff*`), 4000)        
}
});

bot.login(process.env.BOT_TOKEN);
