const D1 = require('discord.js');






const p1 = new D1.Client();







    console.log("oNNN1");
p1.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("621423241608822804");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`Hello it's Violin ...`), 40000)
}
});


  














p1.login(process.env.B);
