const Discord = require('discord.js');
const db = require("quick.db")
const client = new Discord.Client();

exports.run = async(client, message, args) => {


  let user = message.mentions.users.first() || message.author




   const embed = new Discord.RichEmbed()
   .setColor("BLACK")
 .setDescription(`

\`\`\`Ban Komutları.\`\`\`

 **!banlog** | Ban Atılınca Mesaj Gidecek Kanalı Ayarlarsınız. ✨

 **!banrol** | Ban Atabilecek Rolü Ayarlarsınız. ✨

 **!banlimit** | Ban Limidini Ayarlarsınız. ✨

 **!banlimitsıfırla** | Ban Limidini Sıfırlarsınız . ✨

 **!ban** | Kullanıcıya Ban Atarsınız. ✨

 **!unban** | Ban Atılan Kişinin Banını Kaldırırsınız. ✨

\`\`\`Mute Komutları.\`\`\`

  **!mute-yetkili-rol** | Mute Yetkili Rolünü Ayarlarsınız. ✨

  **!mute-log** | Mute Logunu Ayarlarsınız. ✨

  **!mute** | Mute Atarsınız. ✨

\`\`\`Diğer Komutlar.\`\`\`

  **!sil ** | !sil (miktar) Yazarak Belirlediğiniz Miktarda Yazı Silinir. ✨

  **!avatar** | !avatar (kişi etiket) İstediğiniz Kişinin Avatarını Atar. ✨

  **!herkestenrolal** | Belirttiğiniz Rolü Sunucudaki Herkesten Alır. ✨
 
  **!rol ** | !rol al @üye @rol İle Rol Alır. !rol ver @üye @rol İle Rol verirsiniz. ✨


`)
   .addField(` **Bot Davet Linki**        `, `[Davet Linkim](https://discord.com/oauth2/authorize?client_id=744288013969916065&scope=bot&permissions=805829694) `)
   message.channel.send(embed)





}
exports.conf = {
enabled: true, //Komutun Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
guildOnly: false, //Komutun Sunucu Dışında Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
aliases: [], //Ekstra Komut Anahtarları Gire Bilirsiniz! ["Anahtar-ismi"] Gibi
permLevel: 0 //Kullanım Seviyelerini Ayarlarsınız 0 Herkes Kullana Bilir Demektir!
};

exports.help = {
name: 'yardım',
description: 'Komutun Açıklaması',
usage: 'Komutun Kullanım Şekli'
}
