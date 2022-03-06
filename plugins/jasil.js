const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/0hsklk8.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bᴏᴛ Nᴀᴍᴇ 🅲🅾🆂🅼🅸🅲 🅱🅾🆃  *

*Cʀᴇᴀᴛᴇʀ number : wa.me/917025191792?text=Hi%20ᴋʜᴀᴅʜᴇʀ%20bro.%20*


 *ᴄᴏꜱᴍɪᴄ ᴠ1 Cʜᴀɴᴀʟ : NO CHANNEL😁*
     
 *Iɴsᴛᴀɢʀᴀᴍ ɪᴅ: https://instagram.com/__khadher__?utm_medium=copy_link*

 *ᴄᴏꜱᴍɪᴄ ᴠ1 Gʀᴏᴜᴘ: https://chat.whatsapp.com/FhPPp43dYlNLi499ZJuq5X*

 *Gɪᴛ Lɪɴᴋ : NOT RELEASED JOIN WP GROUP FOR GIT*

 *ᴋʜᴀᴅʜᴇʀꫂ⁩..♡︎*
`}) 

}));
