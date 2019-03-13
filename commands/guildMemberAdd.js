const Discord = require("discord.js");
const config = require("../config/config");

module.exports = {
    do: function(params) {

        let member = params.member;

        let joinEmbed = new Discord.RichEmbed()
            .setTitle("Ein Jemand ist gejoint!")
            .setColor(#a0e4f1)
            .addField("Member", member.toString())
            .addField("Joined", member.joinedAt)
            .addField("Account created", member.user.createdAt)
            .setFooter(config.appName + " " + config.version)
            .setTimestamp();

        params.logChannel.send({ embed: joinEmbed })
    }
}