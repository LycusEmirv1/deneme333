const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        "++yardım",
        "Beni sunucuna davet etmek için ++davet yazman yeterli",
        "Botumuz gün geçtikçe gelişmeye devam ediyor."
   ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/lycusboss");
        }, 2 * 2500);
  };
