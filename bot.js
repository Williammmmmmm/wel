client.on("guildMemberAdd", member => { 
    client.channels.cache.get('693068099745742933').send(`qeqeqeqeqeqee`); 
});

bot.login(process.env.BOT_TOKEN);
