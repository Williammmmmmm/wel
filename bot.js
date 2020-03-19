const D1 = require('discord.js');

const D2 = require('discord.js');





const p1 = new D1.Client();


const p2 = new D1.Client();






    console.log("oNNN1");
p1.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("683035809858977927");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`**# - Wélcome Tø Hørizon ,,**`), 2000)
}
});




    console.log("oNNN2");
p1.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("683035809858977927");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`**# - Wélcome Tø Hørizon ,,**`), 2000)
}
});












p1.login(process.env.B);

p2.login(process.env.B);
