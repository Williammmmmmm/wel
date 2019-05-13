const D1 = require('discord.js');
const D2 = require('discord.js');





const p1 = new D1.Client();
const p2 = new D2.Client();






    console.log("oNNN1");
p1.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("577536069692817418");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`**Welcome to Bùbbles.**`), 8000)
}
});

   console.log("oNNN2");
p2.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("521045311213535262");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`**Welcome to  Epsilon..**`), 7800)
}
});

  














p1.login(process.env.B);
p2.login(process.env.B2);
