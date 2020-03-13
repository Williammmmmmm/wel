const D1 = require('discord.js');






const p1 = new D1.Client();








    console.log("oNNN1");
p1.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("677956404467859456");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send(`*Push your spirits,** swive** here`*`), 7000)
}
});
















p1.login(process.env.B);

