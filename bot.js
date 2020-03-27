client.on('guildMemberAdd', member => {
const William = member.guild.channels.get("693068099745742933");
if(!William) return;
if(William) {
setTimeout(() => William.send("> **# - Wélcome Tø Hørizon ,,**"), 3000)
}
});

bot.login(process.env.BOT_TOKEN);
