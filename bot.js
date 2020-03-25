client.on("guildMemberAdd", member => {
 const welcomer =  member.guild.channels.find('683035809858977927');
if(!welcomer) return;
welcomer.send(`> **# - Wélcome Tø Hørizon ,,**`);});


bot.login(process.env.BOT_TOKEN);
