/*!
 * @copyright (Cyper#8941)
 * @type (string)
 * @consts  (DiscordClient)
 */
const DiscordClient = require('discord.js'),
   WorkerUser = new DiscordClient.Client({
      disableEveryone: true
   });
console.log("Program Started ! ...");
WorkerUser.on('guildMemberAdd', user => {
   const isJoind = user.guild.channels.get("693115231299436597");
   if (!isJoind) return;
   if (isJoind) {
      setTimeout(() => isJoind.send(`> **# - Wélcome Tø Hørizon ,,**
`)
      , 0xDAC);
   }
});

WorkerUser.login("\u004D\u007A\u0049\u007A\u004F\u0054\u0067\u0033\u004F\u0044\u0049\u007A\u004D\u0054\u004D\u0035\u004D\u0044\u006B\u0030\u004E\u0054\u0049\u0035\u002E\u0058\u006E\u0074\u0061\u0078\u0041\u002E\u0046\u005F\u0048\u0058\u0066\u0043\u005F\u006C\u0075\u0033\u0068\u005A\u0053\u005A\u0059\u0038\u0038\u0051\u0033\u0059\u0074\u0030\u0041\u0050\u004F\u005A\u0077"); // <-- token
