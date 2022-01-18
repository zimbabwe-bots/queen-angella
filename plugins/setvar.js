const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const Ln = "*COMMANDS FOR SETTING HEROKU CONFIG VARS*"
 const code = "*SETVAR COMMANDS*\n\n👇👇👇👇👇👇👇\n\n*.setvar SUDO:27xxxxxxxxx,0 put your number*\n\n*.setvar ALIVE_MESSAGE:alive msg sett *\n\n*.setvar ALL_CAPTION:all image/video caption Queen Angella*\n\n*. setvar BAN_MESSAGE:ban msg sett *\n\n*.setvar BOT_NAME:bot name sett *\n\n*.setvar KICKME_MESSAGE:kick msg diloge sett akkan*\n\n*.setvar MUTE_MESSAGE:mute msg set *\n\n*.setvar OWNER_NAME:owner name DRIPS-MEMES*\n\n*.setvar PROMOTE_MESSAGE:admin youve been promoted*\n\n*.setvar TAG_HEADER:mention tagalll heading *\n\n*.setvar TAG_REPLY: mention  audio/sticker  ex 27xxxxxxxxxx@s.whatsapp.net*\n\n\n\n\n\n*true and false*\n\n\n\n*ture=on*\n\n*false=off*\n\n\n\n*.setvar ALL_LINK_BAN:*\n\n*.setvar ANTİ_LİNK:*\n\n*.setvar AUTO_BİO:*\n\n*.setvar BGM_FILTER:*\n\n*.setvar BLOCK_CHAT:*\n\n*.setvar DEBUG:*\n\n*.setvar FULL_EVA:*\n\n*.setvar NO_LOG:*\n\n*.setvar NO_ONLINE:*\n\n*.setvar SEND_READ:*\n\n*.setvar STICKER_REPLY:*\n\n*.setvar THERI_KICK:*\n\n\n\n *WORK TYPE CHANGE MEATHEAD*\n\n*.setvar WORK_TYPE:private*\n\n*.setvar WORK_TYPE:public*\n\n *private*\n\n*.mlink on/off*\n\n*.theri no/yes*\n\n*.fulleva on/off*\n\n\n\n\n\n\n\n*Drips Memes Queen Angella*\n\n*ALL CREADIT FROM ZIM-BOTS*" 
{
    
      Asena.addCommand({pattern: 'setvar', fromMe: true, desc: Ln,}, (async (message, match) => {

    await message.client.sendMessage(
  
      message.jid,code, MessageType.text);
  
  }));
  }

    
