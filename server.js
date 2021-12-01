var mineflayer = require('mineflayer');
var pass = "12345"; //Authme plugini şifresi (Plugin yoksa silmeyin)
var ayar = {
  host: "ult11.falix.gg", //Sunucunuzun ipsi
  port: 37544, //Değiştirme!!!
  username: "bottest247", //Botun ismi Kafanıza Göre
  version: "1.12.2" //Değiştirme!!!
  
};

var bot = mineflayer.createBot(ayar);


bot.on('chat', function(username, message) {
  if (username === bot.username) return;
  function intervalFunc() {
    bot.setControlState('forward', true)
  }
  setInterval(intervalFunc,7000);
  console.log('Sunucuya Giriş Yapıldı!');
  bot.chat('/login '+ pass);
});

bindEvents(bot);
function bindEvents(bot) {
  
  bot.on('error', function(err) {
    console.log("Bir Hata Oluştu!");
  });
  
  bot.on('end', function() {
    console.log("Bot sunucudan atıldı!");
    setTimeout(relog, 5000);
  });
  
  function relog() {
    console.log("Sunucuya tekrardan bağlanılıyor");
    bot = mineflayer.createBot(ayar);
    
    bot.on('chat', function(username, message) {
      if (username === bot.username) return;
      console.log("Bot tekrardan sunucuya giriş yaptı!");
      bot.chat('/login '+ pass);
});
    
    
    bindEvents(bot);
  }
}

  
  
