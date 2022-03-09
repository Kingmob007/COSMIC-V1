/* Copyright (C) 2021 AMALSER.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Amalser - Amal
Wa.me/+918281440156
*/

const Neotro = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


Neotro.addCommand({pattern: 'help', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: 'COSMIC BOT Oᴡɴᴇʀ Nᴜᴍʙᴇʀ', description: "⚙Bᴏᴛ Oᴡɴᴇʀ Nᴜᴍᴇʀ\n\n\n*◁ === Tɪs Oᴡɴᴇʀ KHADHER Nᴀɴʙᴜɴ Aɴᴅ Cʜᴜɴᴋs === ▷*\n\n🎭 *COSMIC V1 BY KHADHER *\n 🔮 http://wa.me/+917025191792.\n\n🎭 *KHADHER*\n🔮 http://wa.me/+917560920774\n\n🎭 *COSMIC *\n🔮 http://wa.me/+917025191792\n\n🎭 ", rowId:" rowid1"},
        {title: 'Gɪᴛ', description: "ᴄᴏꜱᴍɪᴄ ᴠ1 Bᴏᴛ Mᴀᴋɪɴɢ Lɪɴᴋ.\n\n\n*◁ === 🥰🤗 Gɪᴛ Lɪɴᴋ === ▷*\n\nhttps://github.com/Khadher05/COSMIC-V1\n\n ", rowId:"rowid2"},
        {title: 'COSMIC  Oғғɪᴄᴀʟ Gʀᴏᴜᴘ Bʏ Khadher', description: "Gʀᴏᴜᴘ Lɪɴᴋ .\n\nhttps://chat.whatsapp.com/FhPPp43dYlNLi499ZJuq5X\n\n\n ", rowId:" rowid5"},
        {title: 'Khadher Cʜᴀɴᴀʟ Lɪɴᴋ ', description: "NO CHANNEL\n\n\n ", rowId:" rowid6"},
        {title: 'Bᴏᴛ Gʀᴏᴜᴘ Dᴇsᴄʀɪᴘᴛɪᴏɴ', description: "Nɪʏᴀᴍᴀᴍ Iɴɪ Eʟʟᴀᴠᴀʀᴋᴋᴜᴍ Bᴀᴅʜᴀᴋᴀ Mᴀɴ \n\n\n☃️ᴏɴɴᴜᴍ ɪʟʟᴀ ɢʀᴏᴜᴘ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ😁 \n\n  ", rowId:" rowid7"}
       ]
       
       const sections = [{title: "KHADHER ❤️", rows: rows}]
       
       const button = {
        buttonText: '💚cosmic bot💚',
        description: "💖✻COSMIC V1 BOT✻💖",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
