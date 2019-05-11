const D1 = require('discord.js');
const D2 = require('discord.js');
const D3 = require('discord.js');
const D4 = require('discord.js');





const p1 = new D1.Client();
const p2 = new D2.Client();
const p3 = new D2.Client();
const p4 = new D2.Client();






    console.log("oNNN1");
p1.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("564191993018974209");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`**Welcome to Bùbbles.**`), 8000)
}
});

   console.log("oNNN2");
p2.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("564191993018974209");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`**Welcome to Bùbbles.**`), 7800)
}
});

   console.log("oNNN3");
p3.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("564191993018974209");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`**Welcome to Bùbbles.**`), 9000)
}
});



   console.log("oNNN4");
p3.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("564191993018974209");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`**Welcome To  Epsilon.**`), 6000)
}
});










p1.login(process.env.B);
p2.login(process.env.B2);
p3.login(process.env.B3);
p3.login(process.env.B4);
