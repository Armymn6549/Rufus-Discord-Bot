const discord = require("discord.js");
//the variables may confuse but its implementation is correct
/***
* @param {Discord.client} bot the discord bot client.
* @param {Discord.messsage} message the initial message sent by the user.
* @param {array} args an array of arguments
 */
module.exports.run = async (bot, message, args) => {
    if (!args) return message.reply("You cant leave this empty!");
    var zap = args;
    if (isNaN(zap)) return message.reply("Please input a valid number");
    var yam = "" + zap;
    var k = 0;
    var abc = "";
    var xyz = "";
    for (var i = 0; i < yam.length; i++) {
        if (yam.charAt(i) == ".") {
            k = i;
        }
    }
    if (k == 0) {
        if (yam.length % 3 != 0) {
            while (true) {
                yam = "0" + yam;
                if (yam.length % 3 == 0) break;
            }
        }
        var octal = parseInt(yam, 2).toString(8);
        message.channel.send(octal);
    }
    else {
        for (var z = 0; z < k; z++) {
            xyz += yam.charAt(z);
        }
        if (xyz.length % 3 != 0) {
            while (true) {
                xyz = "0" + xyz;
                if (xyz.length % 3 == 0) break;
            }
        }
        var oct = parseInt(xyz, 2).toString(8);
        for (var i = 0; i < yam.length; i++) {
            if (yam.charAt(i) == ".") {
                k = i;
            }
        }
        for (var j = k + 1; j < yam.length; j++) {
            abc += yam.charAt(j);
        }
        if (abc.length % 3 != 0) {
            while (true) {
                abc = abc + "0";
                if (abc.length % 3 == 0) break;
            }
        }
        var octal = parseInt(abc, 2).toString(8);
        message.channel.send(oct + "." + octal);
    }
};
module.exports.help = {
    name: "bintooct",
    aliases: ['bo']
};