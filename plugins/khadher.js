const walker = require('../Utilis/events')
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys')
const { getBuffer } = require('../Utilis/download')
//Owner vcard by ī.am/ɮʀօӄɛռօʄƈ❤️
walker.addCommand( //by KHADHER...
  { pattern: "pm ?(.*)", fromMe: true, desc: "send owner vcard" },
async (message, match) => {
const vcard ='https://i.imgur.com/0hsklk8.jpeg'
const walker = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:' + 'í αm°khαdhєr∆' + '\n' 
            + 'ORG:userbot;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=' + '917025191792' + ':' + '917025191792' + ' \n'
            + 'END:VCARD'
const buff = await getBuffer(vcard)
await message.client.sendMessage(message.jid, {displayname: "í αm khαdhєr", vcard: walker}, MessageType.contact,{quoted : {
  key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
      }, //Vcard sender by cσѕmíc v1💙🔅
      message: {
        "imageMessage": {
          "jpegThumbnail": buff.buffer,
          "caption": "cσѕmíc v1💖📍"
        }
      }
   }}) //owner vcard sender
}); //Coded by KHADHER
