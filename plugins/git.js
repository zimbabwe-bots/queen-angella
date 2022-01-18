const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/wvTMw09.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*𝐁𝐎𝐓 𝐍𝐀𝐌𝐄:QUEEN ANGELLA*
 
◼◼❏❏©drips ®zimbots

*𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑 𝐍𝐔𝐌𝐁𝐄𝐑 : wa.me/27634090203?text=Hii%20DripsMemes%20Sir.%20*

 *𝐓𝐎 𝐂𝐇𝐄𝐂𝐊 𝐔𝐏𝐃𝐀𝐓𝐄𝐒 .update   To update Bot .update now*

 *𝐁𝐎𝐓 𝐌𝐀𝐊𝐈𝐍𝐆 𝐕𝐈𝐃𝐄𝐎 : https://www.youtube.com/channel/UC2hESq6BCRMCU-LKpl7Oq8g*
     
 *Instagram id: https://www.instagram.com/zim_hot_chicks_official?utm_medium=copy_link*

 *𝐃𝐑𝐈𝐏𝐒 𝐎𝐅𝐂  𝐙𝐈𝐌-𝐓𝐄𝐂𝐇𝐒 : website coming soon*

 *𝐆𝐈𝐓𝐇𝐔𝐁 𝐋𝐈𝐍𝐊 : https://github.com/zim-bot/queen-angella*

 *QUEEN ANGELLA 𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘  𝐃𝐑𝐈𝐏𝐒 𝐌𝐄𝐌𝐄𝐒 𝐒𝐔𝐁𝐒𝐂𝐑𝐈𝐁𝐄 𝐓𝐎 𝐌𝐘 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐂𝐇𝐀𝐍𝐍𝐄𝐋 𝐃𝐑𝐈𝐏𝐒 𝐎𝐅𝐂 𝐅𝐎𝐑 𝐔𝐏𝐃𝐀𝐓𝐄𝐒*

 ◼◼❏❏©drips ®zimbots
`}) 

}));
