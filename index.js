//const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = "s."

//bot console.log
bot.on("ready", () => {
    bot.user.setGame("s.help");
        console.log("I'm in - " + bot.guilds.size + " - servers");
    });

/*bot.on("ready", async () => {
    console.log(`I have completed booting up, my name is ${bot.user.username}`);
    try {
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log(link);   
    } catch(e) {
        //console.log(e.stack);
        console.log(link);
    }
});*/

bot.on("ready", () => {
  console.log(`I have completed booting up, I am ${bot.user.username}`);
});
// End of bot console.log
/*bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);

});*/

bot.on("message", function(message) {

    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            console.log(`Pong! ${bot.ping} ms`);
            message.delete();
            message.channel.send(`Pong! Latency is ${bot.ping} ms.`);
            break;
        case "help":
            var embed = new Discord.RichEmbed()
                .setTitle("Help Menu")
                .addField("Academy Student App", "s.app", true)
                .addField("Genin", "s.genin", true)
                .addField("Chunin", "s.chunin", true)
                //.addField("Jonin", "Nothing here yet", true)
                //.addField("Title Example 5", "Example 5", true)
                .addField("Time Zone", "s.time - Time Zones", true)
                .addField("Exam Rules", "s.er", true)
                .addField("End of Help Menu", "Nothing else to read here.")
            message.channel.sendEmbed(embed);
            break;
        default:
            message.channel.send("Invalid Command, please type `s.help` ..");
            break;
        case "app":
            message.channel.send(`
            Username: 
Shinobi Life Lvl:
Clan:
Clan Rank:
Uniform Yes/No:
Why you wish to become Academy:`);
            break;
        case "genin":
            var embed = new Discord.RichEmbed()
                .setTitle("Genin Forum")
                .addField("Question 1", "Name the 5 basic elements. || Answer: Fire, Earth, Lightning, Wind, Water", false)
                .addField("Question 2", "Name 2 Sub-Kage's+ || Answer: Any Sub Kage or higher", false)
                .addField("Question 3", "Why do you want to be Genin? Give at least 3 best reasons || Proctor can approve or decline their answers.", false)
            message.channel.sendEmbed(embed);
            break;
        case "chunin":
            var embed = new Discord.RichEmbed()
                .setTitle("Chunin Forum")
                .addField("Question 1", "What land is this village from? || Answer: Land of Lightning / Lightning", false)
                .addField("Question 2", "Who is the founder of this village? || Answer: TinyTie1234", false)
                .addField("Question 3", "Why do you want to be Chunin? Give at least 3 - 5 best reasons || Proctor can approve or decline their answers.")
                .addField("Question 4", "Name 3 Kekkai Genkai || Proctor can approve or decline their answers.")
                .addField("Question 5", "Are we a good or evil village? || Answer: Evil/Bad")
            message.channel.sendEmbed(embed);
            break;
        case "er":
            message.channel.send(`**Specific Rules:
•No healing during fights
•No holding back
•No special sword (ie swords that have a special effect)
•No ying/yang (they are too op and would affect results)
•No modes at all
•No kekkai genkai of any sorts
•No running (running away from the opponent you must fight)

General Rules
•Listen to the examiners orders and follow them
•Do not fight when you are not told to
•Do not argue with other members during exams
•Do not try and dispute your own or others failure
•Do not go afk while in an exam (away from keyboard)
•The examiner will have the final say on all decision unless someone of a higher ranks says so.**`)
            break;
        case "time":
        message.channel.send(`[EST/EDT](https://www.timeanddate.com/worldclock/usa/new-york)
[PST](https://www.timeanddate.com/time/zone/usa/los-angeles)
[BST](https://www.timeanddate.com/time/zone/uk/london)`);
            break;
    }
});
bot.login("MzMyNjM0ODU0MTc5MDc4MTY1.DEA94A.WfQmJmVlK-OvFiXKUSRholVsuLE");