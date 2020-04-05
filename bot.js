
client.on("guildMemberAdd", member => {
    let room = client.guilds.get("323987823139094529").channels.find(r => r.name === "general")
    if(!room) return
   room.send(`ارحب ، نورت السيرفر !!`)

});

