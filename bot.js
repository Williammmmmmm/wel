const D1 = require('discord.js'); 
const D2 = require('discord.js');  



const p1 = new D1.Client();
const p2 = new D1.Client();






    console.log("oNNN1");
p1.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("573399652305731596");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`**Welcome to Spoil.**`), 4000)
}
});

 



    console.log("oNNN2");
p2.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("521045311213535262");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`**.Welcome To Epsilon.**`), 4000)
}
});

 
  



p1.login(process.env.B);
p2.login(process.env.B2);
