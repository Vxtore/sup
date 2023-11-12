 if (message.author.bot) return;const { Discord, Client } = require('discord.js-selfbot');
const client = new Client();
console.log('DM')

client.on('ready', () => {
  console.log(Successfully logged in as ${client.user.tag});
});


client.on('message', async (message) => {
  if (message.author.bot) return;const { Discord, Client } = require('discord.js-selfbot');
con

  if (message.content.startsWith('-post')) {
    const args = message.content.split(' ');
    const channelID = args[1];
    const delay = args[2];

    const channel = client.channels.cache.get(channelID);

    if (channel) {
      message.channel.send(Starting automatic messages in ${channel} with a delay of ${delay} seconds.);

      startAutomaticMessages(channel, delay);
    } else {
      message.channel.send('Invalid channel ID.');
    }
  }
});

async function startAutomaticMessages(channel, delay) {
  while (true) {
    const content = '# 🇫 🇷 🇪 Mammoth & Leopard in my BIO  🐆 ♾️'
    let msg = await channel.send(content);
    await sleep(delay * 1000); 

  }
}

let sent = [];
client.on("message", async msg => {
  if (msg.channel.type === "dm") {

    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
          if(sent.includes(msg.author.id)) return;
          sent.push(msg.author.id)
          await sleep(12500) 
          await msg.channel.send(process.env.message)

      }
    }
  }
})

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

client.login(process.env.token);