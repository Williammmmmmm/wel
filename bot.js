const D1 = require('discord.js');
const D2 = require('discord.js');






const p1 = new D1.Client();
const p2 = new D2.Client();







    console.log("oNNN1");
p1.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("629268891700428810");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`*Hello , you're in dint.*`), 10000)
}
});


  
    console.log("oNNN2");
p2.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("629268891700428810");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`*Hello , you're in dint.*`), 10000)
}
});














p1.login(process.env.B);
p2.login(process.env.B2);

