const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/0hsklk8.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bot Name: Amalser*
*Creator number : wa.me/917025191792?text=Hii%20KHADHER%20BIG%20FAN%2.0*
 *To check update .update   To update Bot .update now*
 *Bot making video : NOT AVAILABLE NOW*
     
 *Instagram id: https://www.instagram.com/p/__khadher__/?utm_medium=copy_link*
 *COSMO_PASSWORD: _________(password in instagram bio)*
 *githublink : https://github.com/khadher05/COSMIC-V1*
 *Amalser New Acoount Git Link Old Account Is Flagged Hope you Enjoy This Thanku 🥰*
`}) 

}));
