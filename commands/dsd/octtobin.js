const discord = require("discord.js");
//the variables may confuse but its implementation is correct
/***
* @param {Discord.client} bot the discord bot client.
* @param {Discord.messsage} message the initial message sent by the user.
* @param {array} args an array of arguments
 */
module.exports.run = async (bot, message, args) => {
    if(!args) return message.reply("You cant leave this empty!");
    var zap = args;
    var yam = ""+zap;
    var xek = "";
    var uv = "";
    var k = 0;
    for(var j=0;j<yam.length;j++){
        if(yam.charAt(j)=="."){
            k=j;
        }
    }
    if(k==0){
    for(var i =0;i<yam.length;i++){
        var a = yam.charAt(i);
        let b;
        if(a=="0") b="000";
        if(a=="1") b="001";
        if(a=="2") b="010";
        if(a=="3") b="011";
        if(a=="4") b="100";
        if(a=="5") b="101";
        if(a=="6") b="110";
        if(a=="7") b="111";
        xek+=b;
    }
    message.channel.send(xek);
    }
    else{
        for(var i=0;i<k;i++){
            var a = yam.charAt(i);
            let b;
            if(a=="0") b="000";
            if(a=="1") b="001";
            if(a=="2") b="010";
            if(a=="3") b="011";
            if(a=="4") b="100";
            if(a=="5") b="101";
            if(a=="6") b="110";
            if(a=="7") b="111";
            xek+=b;
        }

        for(var j=k+1;j<yam.length;j++){
            var c = yam.charAt(j);
            let d;
            if(c=="0") d="000";
            if(c=="1") d="001";
            if(c=="2") d="010";
            if(c=="3") d="011";
            if(c=="4") d="100";
            if(c=="5") d="101";
            if(c=="6") d="110";
            if(c=="7") d="111";
            uv+=d;
        }
        message.channel.send(xek+"."+uv);
    }
};

module.exports.help = {
	name: "octtobin",
    aliases: ['ob']
};