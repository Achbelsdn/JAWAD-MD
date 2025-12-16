
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

//add your session id

global.session = "https://khanxmd-pair.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "JK~H4sIAAAAAAAAA5VU25KiSBD9l3rVGJA7RnTEAiKgoqjYtm7sQwEFVsvNokDoCf99A+2entiYne3lqahL5jknT+Z3kBe4QnPUgfF3UBLcQIr6Je1KBMZAr+MYETAEEaQQjMFlNV28nbyB9Fy6hNv5XZMFZ/ri2OrqsrE9Ld+nrM8sgmzPPoHbEJR1kOLwNwE5J99P3Fp7nnM8s75qmvzGkZZjNsdzPj3TdSu2nndKY2qGT+DWR4SY4DwxyxPKEIHpHHUexORr8MNl2giKfFlcWWkXLmhnt5DOFqzocJlXsUtfFJDtr9RNrn0NPr4yuEaaxbUnWDN+ploYZX6anqT1KZ2vX3TBDezSbJSkeMCvcJKjyIlQTjHtvqz7dTmisJkFU/7ywsDYknGAjpDbvsIyWCSjwXp5tNet73dZ8TXgx2dLZGg+RaneBptm1VxHezk8ykZ1QHoUkDq9Tk+t53pd+DNwj3x45fx/dC9mRIfrASNe5POqFoOwG6mHNzhPdjisNDfKd3nxlpSY7N2vwbeb+UtazbUZh9ehhJOSvjH6xjKdzVY4mciwtPyy8o7TthM+4UNak9+hdDxhMpGkcrQTAsvYlpsouiYLsqz31YXwcfcK63ObT1XNt5mpR+SzbUDBui4tdbk4C9M1P/Fng+crw6+J740Wg4uV6Mn16c7ojDonAuPRbQgISnBFCaS4yPs9SR0CGDVbFBJE7+oCsXWD5b7duhPuNJsbnKo2ZyhM7dnK3u6E3HRWYcNvzqOZcn0CQ1CSIkRVhSIbV7QgnYuqCiaoAuM/74XqOROUFRTNcNQ3HadKssiLnCr8UX27niCtYFl+yxEFQxCTInMRGFNSoyG439fEicLyU1kUFXHCG4op8pzMSqJicIKqiFxPMHvk9HGGKgqzEoxHsiQqMsux6u2vIchRSx/uuesgceIQxJhUdJfXZVrA6MNcn8cwDIs6p9suD41+gQgYs5/biFKcJ1VPrs4hCU+4QUbPBYxjmFboh9SIoOiDz/v4MIqod8Dc1pa+adigx98H+qc8Y+4XCuWwvwyMg25utra2mYMhSO8vRxKrSALHiZzAc4rYv+4Pbj9A9zkiRCFOqz7CAm9KUbFND+5ObmFZmploRqKBT5Iftn34gsHtYh4nEFerVkG5RLhV1WGx8QenhkraQlqIpZ7k+GBoT78IAsZAdkctu/GmwVRPttFi70plozLKRoSDXSe8zJzlhO0cz1GmDvbNzjJ4zWRG4nEZMK1y4CuHmdmHwjhqst748BDlYb3Se48PQYQaHKKfk63eNFlZBMazNYBzXIoFTY62Q92gKUxlqeiGebX3My/gzeCV96P0GO+iInytZzraKydPdmL+0JnyRQlGe97KhQ4paaI9Gure0On7IMXvXsf33xij+1x6r9N/lfOBu7cdexv+FOJ90P3LsNBjodp2uWAVZFLFdjm4qK/ELeqAZYpARokxwAO4PsyETEvAre+AMoU0LkgGxqDKAgiGgBR1b2Enj4vfZDK0nWMmybJnncKKap9t8atu4x63PFKUNqxOYAzyjNeD3uKdVpZbCulHmwHt/kUCuP0NFxM0MgkIAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "22967535294", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "true", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed By JAWAD MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923427582273", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "JawadTech", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "🩵", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "true", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "null, pm, dm, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "JAWAD-MD", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/pf270b.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "i am jawad md",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
//KHAN MD; 🔥💸💀
