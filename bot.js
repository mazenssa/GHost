const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'السلام عليكم ') {
    msg.reply('وعليكم السلام منور السيرفر');
  }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'كسمك') {
    msg.reply('ربنا يسمحك');
  }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'يا ابن المتناكة ') {
    msg.reply('ربنا يسمحك');
  }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'اهلا') {
    msg.reply('اهلا بك منور السيرفر');
  }
});

client.login('NTM1MjY4NDk4MTUxMDQ3MTY4.DyHYHA.Rw4ZHwl7OhlAgCndGJmBvvBhqw0');
