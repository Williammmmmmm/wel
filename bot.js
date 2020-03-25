const Discord = require('discord.js');
const client = new Discord.Client();

    console.log(`i am ready ${client.user.username}`);
});
    console.log("oNNN1");
p1.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("683035809858977927");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`> **# - Wélcome Tø Hørizon ,,**`), 2000)
}
});

client.login(process.env.BOT_TOKEN);
