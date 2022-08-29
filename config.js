//═══════[© 2022 nexusNw Inc.]════════\\

//
//
//                      𝙰𝚜𝚝𝚊 𝚋𝚢 𝚗𝚎𝚡𝚞𝚜𝚗𝚠
//
//                     𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙-𝙼𝙳 𝙱𝚘𝚝
//

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapis.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapis.xyz': 'B6084A1B49', //Change This API KEY 
}

//═══════[modification]════════\\
global.owner = ['6282229445509'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.pemilik = ['6282229445509'] //another owner number
global.premium = ['62895327934887'] //premium number
global.pengguna = 'Àimò Shuǐ By Krizynofc' //username
global.botnma = 'Àimò Shuǐ Botz"' //bot name
global.ownernma = '👻Nolan' //owner name
global.packname = 'Àimò Shuǐ' //sticker package name
global.author = 'By KrizynOfc' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '⭔' //design
global.mess = {
    success: 'Berhasil ✓',
    admin: 'Perintah Hanya Di Gunakan Untuk Admin',
    botAdmin: 'Jadikan Bot Admin Dulu',
    owner: 'Elu Bukan Owner Gua Gblok',
    group: 'Gunakan Perintah Ini Di Grup!',
    private: 'Gunakan Perintah Ini Di Chat Pribadi Ler',
    bot: 'This feature in only for the bot number',
    wait: 'process...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 28684 //free user limit
}
global.thumb = fs.readFileSync('./Media/astapic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
