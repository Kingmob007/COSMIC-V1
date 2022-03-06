const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔══■□💙ᴄᴏꜱᴍɪᴄ ᴠ1💙■□══╗*\n           \n*⚜═ᴋʜᴀᴅʜᴇʀ═⚜*\n\n*𝕆𝕨𝕟𝕖𝕣 ᴄᴏꜱᴍɪᴄ ᴠ1-ᴋʜᴀᴅʜᴇʀ - https://api.whatsapp.com/send?phone=+917025191792&text=Please%20add%20ᴄᴏꜱᴍɪᴄ ᴠ1%20bot%20ɢʀᴏᴜᴘ%20💙*\n*            *\n*╚══■□💙ᴀᴍʀᴜ-sᴇʀ💙■□══╝*\n\n*▷Creator: Aʙᴜ-Jᴀsɪʟ ✝︎*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Gɪᴛ Lɪɴᴋs*\n           *\n🌟═ᴄᴏꜱᴍɪᴄ ᴠ1 ᴏᴡɴᴇʀ ᴋʜᴀᴅʜᴇʀ- »« ᴋʜᴀᴅʜᴇʀ═🌟*\n\n*🔅NOT REALEASED GIT*"
    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔══■□💙ᴄᴏꜱᴍɪᴄ ᴠ1💙■□══╗*\n           \n*⚜═ᴋʜᴀᴅʜᴇʀ═⚜*\n\n*𝕆𝕨𝕟𝕖𝕣 ᴋʜᴀᴅʜᴇʀ - https://api.whatsapp.com/send?phone=+917025191792&text=Please%20add%20ᴄᴏꜱᴍɪᴄ ᴠ1%20bot%20ɢʀᴏᴜᴘ%20💙*\n*            *\n*╚══■□💙ᴄᴏꜱᴍɪᴄ ᴠ1💙■□══╝*\n\n*▷Creator: ᴋʜᴀᴅʜᴇʀ ✝︎*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Gɪᴛ Lɪɴᴋs*\n           *\n🌟═ᴄᴏꜱᴍɪᴄ ᴠ1 ᴏᴡɴᴇʀ ᴋʜᴀᴅʜᴇʀ- »« ᴋʜᴀᴅʜᴇʀ═🌟*\n\n*🔅NOT RELEASED GIT*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
