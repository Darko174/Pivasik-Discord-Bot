import Discord from "discord.js"
import config from "./config.js"

const client = new Discord.Client();
const prefix = "!";

const radio = "http://air.radiorecord.ru:805/rr_320";
//
client.on("ready", () => {
    const channel = client.channels.cache.get("483261105850941440");
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
      // Yay, it worked!
      console.log("Successfully connected.");
      const dispatcher = connection.play(radio, { volume: 0.3 });
    }).catch(e => {
      // Oh no, it errored! Let's log it to console :)
      console.error(e);
    });
  });

client.on("message", function(message) {
    console.log();
    if (message.author.bot) return;
    if(message.content.toLocaleLowerCase().includes("бот")) {
        message.reply("Чаво тебе нужна?");
    }
    if(message.attachments.size) {
        message.reply("Збсь, внатуре четко, умеете, могете!");
    }
    /* if(message == "join") {
        //const channel = client.channels.cache.get("483261105850941440");
    } */
});
client.login(config.BOT_TOKEN);