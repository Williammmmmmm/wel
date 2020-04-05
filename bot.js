const {
  tokens,
  voice_channel,
  text_channel,
  your_server
} = require("./config.js");
const time = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000];
const Discord = require("discord.js");
tokens.forEach(token => {
  const client = new Discord.Client();
  client.login(token);

  client.on("message", async message => {
    if (message.guild.id != your_server) return;
    if (
      message.author.id == "323987823139094529" && // تعديل مهم ايدي بوت الترحيب
      message.content.includes("-") /// (الاستقبال) تعديل مهم رسالة الترحيب
    ) {
      setTimeout(() => {
        message.channel.send("*You’re in **Riiich** , Welcome.*"); ///  (الارسال)تعديل مهم رسالة الترحيب
      }, time[Math.floor(Math.random() * time.length)]);
    }
  });

  client.on("ready", () => {
    console.log(client.user.tag + " is ready!");
    client.guilds
      .get(your_server)
      .channels.get(voice_channel)
      .join();
  });

});
