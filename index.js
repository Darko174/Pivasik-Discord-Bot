import Discord from "discord.js"
import config from "./config.js"

const client = new Discord.Client();

const radios = {
  "рукивверх" : "https://air.radiorecord.ru:805/rv_320",
  "record" : "http://air.radiorecord.ru:805/rr_320",
  "trancehits" : "http://air.radiorecord.ru:8102/trancehits_128",
  "tecktonik" : "http://air.radiorecord.ru:8102/tecktonik_128",
  "neurofunk" : "http://air.radiorecord.ru:8102/neurofunk_128",
  "house" : "http://air.radiorecord.ru:8102/houseclss_128",
  "darkside" : "http://air.radiorecord.ru:8102/darkside_128",
  "dreamdance" : "http://air.radiorecord.ru:8102/dream_128",
  "bighits" : "http://air.radiorecord.ru:8102/bighits_128",
  "progressive" : "http://air.radiorecord.ru:8102/progr_128",
  "basshouse" : "http://air.radiorecord.ru:8102/jackin_128",
  "electro" : "http://air.radiorecord.ru:8102/elect_128",
  "russianhits" : "http://air.radiorecord.ru:8102/russianhits_128",
  "chillhouse" : "http://air.radiorecord.ru:8102/chillhouse_128",
  "rapclassics" : "http://air.radiorecord.ru:8102/rapclassics_128",
  "raphits" : "http://air.radiorecord.ru:8102/rap_128",
  "discofunk" : "http://air.radiorecord.ru:8102/discofunk_128",
  "technopop" : "http://air.radiorecord.ru:8102/technopop_128",
  "eurodance" : "http://air.radiorecord.ru:8102/eurodance_128",
  "dnb" : "http://air.radiorecord.ru:8102/drumhits_128",
  "megamix" : "http://air.radiorecord.ru:8102/mix_128",
  "deep" : "http://air.radiorecord.ru:8102/deep_128",
  "edm" : "http://air.radiorecord.ru:8102/club_128",
  "tropical" : "http://air.radiorecord.ru:8102/trop_128",
  "futurehouse" : "http://air.radiorecord.ru:8102/fut_128",
  "trancemission" : "http://air.radiorecord.ru:8102/tm_128",
  "chillout" : "http://air.radiorecord.ru:8102/chil_128",
  "minimal" : "http://air.radiorecord.ru:8102/mini_128",
  "piratestation" : "http://air.radiorecord.ru:8102/ps_128",
  "russianmix" : "http://air.radiorecord.ru:8102/rus_128",
  "viphouse" : "http://air.radiorecord.ru:8102/vip_128",
  "hypnotic" : "http://air.radiorecord.ru:8102/hypno_128",
  "trancehouse" : "http://air.radiorecord.ru:8102/trancehouse_128",
  "superdiscoteka 90-x" : "http://air.radiorecord.ru:8102/sd90_128",
  "dubstep" : "http://air.radiorecord.ru:8102/dub_128",
  "dancecore" : "http://air.radiorecord.ru:8102/dc_128",
  "remix" : "http://air.radiorecord.ru:8102/rmx_128",
  "techno" : "http://air.radiorecord.ru:8102/techno_128",
  "hardbass" : "http://air.radiorecord.ru:8102/hbass_128",
  "hardstyle" : "http://air.radiorecord.ru:8102/teo_128",
  "rock" : "http://air.radiorecord.ru:8102/rock_128",
  "medlyak" : "http://air.radiorecord.ru:8102/mdl_128",
  "gopfm" : "http://air.radiorecord.ru:8102/gop_128",
  "rave" : "http://air.radiorecord.ru:8102/rave_128",
  "gastarbeiter" : "http://air.radiorecord.ru:8102/gast_128",
  "anshlag" : "http://air.radiorecord.ru:8102/ansh_128",
  "naftalin" : "http://air.radiorecord.ru:8102/naft_128"
}
const rozbiiniki = "570616211415629847";
const testServer = "857264279543349258";
let currentVoiceChannel = "";
let connect;
const phrases = ["Збсь, внатуре четко, умеете, могете!", "Пиши исчо!"];
//
client.on("ready", () => {
  const channel = client.channels.cache.get(rozbiiniki);


  currentVoiceChannel = rozbiiniki;

  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
    connect = connection;
    // Yay, it worked!
    console.log("Successfully connected.");
    connection.play("http://air.radiorecord.ru:805/rr_320", { volume: 0.5 });
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
    if(message.content == "тестканал" && currentVoiceChannel != testServer) {
      if(currentVoiceChannel) {
        client.channels.cache.get(currentVoiceChannel).leave();
      }
      client.channels.cache.get(testServer).join();
      currentVoiceChannel = testServer;
    }
    if(message.content == "идикрозбийникам" && currentVoiceChannel != rozbiiniki) {
      if(currentVoiceChannel) {
        client.channels.cache.get(currentVoiceChannel).leave();
      }
      client.channels.cache.get(rozbiiniki).join();
      currentVoiceChannel = rozbiiniki;
    }
    if(message.content == "команды") {
      message.reply(`
      Привет!

        Чтобы включить определенное радио, напишите боту в лс: "включи нужнаярадиостанция".
        Без кавычек, в названии радиостанции не должно быть пробелов.

        Список радиостанций:

        рукивверх
        record
        trancehits
        tecktonik
        neurofunk
        house
        darkside
        dreamdance
        bighits
        progressive
        basshouse
        electro
        russianhits
        chillhouse
        rapclassics
        raphits
        discofunk
        technopop
        eurodance
        dnb
        megamix
        deep
        edm
        tropical
        futurehouse
        trancemission
        chillout
        minimal
        piratestation
        russianmix
        viphouse
        hypnotic
        trancehouse
        superdiscoteka
        dubstep
        dancecore
        remix
        techno
        hardbass
        hardstyle
        rock
        medlyak
        gopfm
        rave
        gastarbeiter
        anshlag
        naftalin

        Если чо наебнулось, пишите)
      `);
    }
    if(message.content.includes("включи")) {
      let commandBody = message.content.split(" ").pop().toLowerCase();

      if(radios[commandBody]) {
        connect.play(radios[commandBody], { volume: 0.6 });
      } else {
        message.reply("Радио не найдено");
      }
    } 
});
client.login(config.BOT_TOKEN);