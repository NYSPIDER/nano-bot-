const Discord = require('discord.js');
const PREFIX  ="=>";
const bot     = new Discord.Client();

// erro messages 
var error= ["```Someone Touch My Spaghet!?```","```Do You Know the Way!:AniKnuckles:```","```WROOG```","```Wanna Come Back To My Crib?```"];
var servers ={};
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
function play (connection,message){
    var server =servers[message.guild.id];
    server.dispatcher =connection.playStream();
}
// welcome , good bye messages . and picking roles 
bot.on("guildMemberAdd",function(member)
{
    member.guild.channels.find("name","welcome").sendMessage("Welcome to **Sketcher** :wink: "+member.toString()+" please check the "+member.guild.channels.find("name","rules") +" channel and use "+member.guild.channels.find("name","bot-spam") +" channel for bot commands");
    member.addRole(member.guild.roles.find("name","league of leagends"));
});

bot.on("guildMemberRemove",function(member)
{
    member.guild.channels.find("name","welcome").sendMessage("**"+member.toString()+"** it takes forever to say goodbye , **False**. it takes exactly .978 secounds to say goodbye.");
});

//commands to do 

bot.on("message",function(message)
{
    if(message.author.equals(bot.user)) return;
    if(!message.content.startsWith(PREFIX))return;

    var args =message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()){
        case "help":
        message.channel.sendMessage("NO I WONT :P");
            break;
        
        default:
        message.channel.sendMessage(error[getRandomInt(4)]);   
    }
});

bot.login(process.env.BOT_TOKEN);
