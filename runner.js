const {
WAConnection,
MessageType,
Presence,
Mimetype,
GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('./mess/myfunc')
const { color } = require('./mess/color')
const welcome = JSON.parse(fs.readFileSync('./storage/welcome.json'))
number = '6289695073357@s.whatsapp.net'

require('./srv/zero.js')
nocache('./srv/zero.js', module => console.log(`${module} Telah Di Updated... Jangan Lupa Subscribe Zero YT7`))

global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
const starts = async (zero = new WAConnection()) => {
zero.logger.level = 'warn'
zero.version = [2, 2143, 3]
zero.browserDescription = [ 'NekellGanss', 'Firefox', '3.0' ]
console.log(banner.string)
console.log(color('[β’] [ CREATED BY WHY NEKELLπ₯ ] [β’]'))
console.log(color('Please Follow Me On Sosial Media'))
console.log(color(' ==============================================='))
console.log(color('β β Youtube : https://facebook.com/nekellganss                     '))
console.log(color('β β Instagram : https://instagram.com/nekellgatau                 '))
console.log(color('β β Tiktok : https://tiktok.com/@abcdefghijkell                        '))
console.log(color('β β Github : https://github.com/Nekellganss-Id                        '))
console.log(color(' ==============================================='))
zero.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color('Please... Scan Is Now Qr Code !'))
})

fs.existsSync('session.json') && zero.loadAuthInfo('session.json')

zero.on('connecting', () => {
start('2', 'Sedang Menyambungkan Mohon Tunggu...')
})
zero.on('open', () => {
success('2', 'Bot Telah Tersambung... Jangan Lupa Subscribe Zero YT7')
})
await zero.connect({timeoutMs: 30*1000})
fs.writeFileSync('session.json', JSON.stringify(zero.base64EncodedAuthInfo(), null, '\t'))
zero.on('chat-update', async (message) => {
require('./srv/zero.js')(zero, message)
})
    
const sendButImage = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1;
mhan = await zero.prepareMessage(id, kma, MessageType.image);
buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4,
}
zero.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

zero.on('group-participants-update', async (anu) => {
try {
var mdata = await zero.groupMetadata(anu.jid)
groupMet = await zero.groupMetadata(anu.jid)
groupMembers = groupMet.participants
groupAdmins = getGroupAdmins(groupMembers)
mem = anu.participants[0]
console.log(anu)
try {
pp_user = await zero.getProfilePicture(mem)
} catch (e) {
pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
}
try {
pp_grup = await zero.getProfilePicture(anu.jid)
} catch (e) {
pp_grup =
"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
if (anu.action == "add" && mem.includes(zero.user.jid)) {
zero.sendMessage(anu.jid, "=|HAY IDOLL!.. SAYA NEKELLπ₯ SAYA AKAN MEMBANTU,MEMPERMUDAH KINERJA WHATSAPP SEPERTI MEMBUAT STICKER DAN LAIN LAIN YANG ADA DI DALAM FITUR. |=", "conversation")
}
      
if (anu.action == 'add') {
num = anu.participants[0]
let v = zero.contacts[num] || { notify: num.replace(/@.+/, "") }
anu_user = v.vname || v.notify || num.split("@")[0]
try {
ppUr = await zero.getProfilePicture(anu_user)
} catch {
ppUrl = 'https://telegra.ph/file/c9dfa715c26518201f478.jpg'
}
img = await getBuffer(ppUrl)
teks = `Hallo Idoll @${anu_user}\nSelamat Datang Di Group: ${mdata.subject}\n\nSemoga Betah Ya Di Group Ini`
sendButImage(anu.jid, teks, `Β©Created By Why Nekell?π₯`, img,but = [{buttonId:`hallo`, 
buttonText:{displayText: 'SELAMAT DATANG IDOLL!!!'},type:1}], options = {contextInfo: {mentionedJid: [num, number]},thumbnail: Buffer.alloc(0)})
} else if (anu.action == 'remove') {
num = anu.participants[0]
try {
ppUrl = await zero.getProfilePicture(num)
} catch {
ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
}
img = await getBuffer(ppUrl)
teks = `Bye Bye @${num.split('@')[0]}\nHore... Beban Group Berkurang Selamat Tinggal Dan Kaga Usah Balik Lagi Di Group: ${mdata.subject}`
sendButImage(anu.jid, teks, `Β©Created By Why Nekell?π₯`, img,but= [{buttonId: `byebye`, buttonText: {displayText: `YAHAHA BEBAN OUT!!!`}, type: 1}], options = {contextInfo: {mentionedJid: [num, number]}, thumbnail: Buffer.alloc(0)})
}
if (anu.action == "promote") {
anu_user = zero.contacts[mem]
num = anu.participants[0]
try {
ppimg = await zero.getProfilePicture(
`${anu.participants[0].split("@")[0]}@c.us`
)
} catch {
ppimg =
"https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
}
let buff = await getBuffer(ppimg)
teks = `@${num.split("@")[0]} Telah dipromote`
zero.sendMessage(mdata.id, teks, MessageType.text)
}
if (anu.action == "demote") {
anu_user = zero.contacts[mem]
num = anu.participants[0]
const mdata = await zero.groupMetadata(anu.jid)
try {
ppimg = await zero.getProfilePicture(
`${anu.participants[0].split("@")[0]}@c.us`
)
} catch {
ppimg =
"https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
}
let buff = await getBuffer(
`https://gatauajg.yogipw.repl.co/api/demote?name=${anu_user.notify}&msg=selamat%20menjadi%20admin&mem=5&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
)
teks = `@${num.split("@")[0]} Telah didemote`
zero.sendMessage(mdata.id, teks, MessageType.text)
}
} catch (e) {
console.log(e)
}
})
   
zero.on("group-update", async (anu) => {
metdata = await zero.groupMetadata(anu.jid);
if (anu.announce == "false") {
teks = `- [ ππΏπΌππ½ π’π½π²π»π²π± ] -\n\nπ?ππππ π»ππππ π«π π©πππ πΆπππ π¨ππππ\nπΊπππππππ πΊππππ π΄πππππ π«ππππ π΄πππππππ π·ππππ`;
zero.sendMessage(metdata.id, teks, MessageType.text);
console.log(`- [ Group Opened ] - In ${metdata.subject}`);
} else if (anu.announce == "true") {
teks = `- [ ππΏπΌππ½ ππΉπΌππ²π± ] -\n\nπ?ππππ π»ππππ π«π π»ππππ πΆπππ π¨ππππ\nπΊπππππππ π―ππππ π¨ππππ ππππ π«ππππ π΄πππππππ π·ππππ`;
zero.sendMessage(metdata.id, teks, MessageType.text);
console.log(`- [ Group Closed ] - In ${metdata.subject}`);
} else if (!anu.desc == "") {
tag = anu.descOwner.split("@")[0] + "@s.whatsapp.net";
teks = `- [ ππΏπΌππ½ ππ²ππ°πΏπΆπ½ππΆπΌπ» ππ΅π?π»π΄π² ] -\n\nπ«ππππππππ π?ππππ π»ππππ π«πππππ πΆπππ π¨ππππ @${
anu.descOwner.split("@")[0]
}\nπ«ππππππππ π©πππ : ${anu.desc}`;
zero.sendMessage(metdata.id, teks, MessageType.text, {
contextInfo: { mentionedJid: [tag] },
});
console.log(`- [ ππΏπΌππ½ ππ²ππ°πΏπΆπ½ππΆπΌπ» ππ΅π?π»π΄π² ] - π°π ${metdata.subject}`);
} else if (anu.restrict == "false") {
teks = `- [ ππΏπΌππ½ π¦π²πππΆπ»π΄ ππ΅π?π»π΄π² ] -\n\nπ¬πππ π?ππππ π°πππ π»ππππ π«πππππ πΌππππ π΄πππππ\nπΊπππππππ πΊππππ π΄πππππ π«ππππ π΄πππππππ π°πππ π?ππππ π°ππ`;
zero.sendMessage(metdata.id, teks, MessageType.text);
console.log(`- [ ππΏπΌππ½ π¦π²πππΆπ»π΄ ππ΅π?π»π΄π² ] - π°π ${metdata.subject}`);
} else if (anu.restrict == "true") {
teks = `- [ ππΏπΌππ½ π¦π²πππΆπ»π΄ ππ΅π?π»π΄π² ] -\n\nπ¬πππ π?ππππ π°πππ π»ππππ π«ππππππ πΌππππ π΄πππππ\nπΊπππππππ π―ππππ π¨ππππ π?ππππ ππππ π«ππππ π΄πππππππ π°πππ π?ππππ π°ππ`;
zero.sendMessage(metdata.id, teks, MessageType.text);
console.log(`- [ ππΏπΌππ½ π¦π²πππΆπ»π΄ ππ΅π?π»π΄π² ] - ππ£ ${metdata.subject}`);
}
})

antical = true
zero.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
zero.sendMessage(call, `*Sorry ${zero.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => zero.blockUser(call, "add"))
})


zero.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))
}
})
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
 
function nocache(module, cb = () => { }) {
console.log('Module', `'${module}'`, 'Sekarang Sedang Diawasi Untuk Perubahan')
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