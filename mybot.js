const Discord = require('discord.js')
const client = new Discord.Client()
const {prefix, token} = require('./config.json')

client.on('ready', () => {
  console.log('General Kenobi!')
})
client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return
  const content = message.content.slice(prefix.length).toLowerCase()
  // code below, prefix check above
  if (content === 'hello there!') {
    message.channel.send('*General Kenobi!*')
  }
  else if (content === 'I am the senate') {
    message.channel.send('http://4.bp.blogspot.com/-CY9BB38dzss/VD25QaYDgmI/AAAAAAAAEqE/AhmiSvwndM0/s1600/Palp_trustme.jpg')
  }
  else if (content === `he's too dangerous to be kept alive!`) {
    message.channel.send('https://i.imgflip.com/1og5io.jpg')
  }
  else if (content === `it's treason then`) {
    message.channel.send('https://i.imgur.com/2DHY3Hx.jpg')
  }
  else if (content === `dewit`) {
    message.channel.send('https://pm1.narvii.com/6517/eae9f2b7ed38e08ae91da18bfa9294b8527802d7_hq.jpg')
  }
  else if (content === `you turned her against me!`) {
    message.channel.send('https://memegenerator.net/img/instances/64360915/you-turned-her-against-me-you-did-that-yourself.jpg')
  }
  else if (content === `i'll try spinning, that's a good trick!`) {
    message.channel.send('https://i.kym-cdn.com/photos/images/newsfeed/001/075/929/4a5.gif')
  }
  else if (content === `i'll try spinning, thats a good trick!`) {
    message.channel.send('https://i.kym-cdn.com/photos/images/newsfeed/001/075/929/4a5.gif')
  }
  else if (content === 'the tragedy of Darth Plagueis the wise') {
    message.channel.send(`did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.`)
  }
  else if (content === 'not yet.') {
    message.channel.send(`https://i.redd.it/3ctej8mbbs701.jpg`)
  }
  else if (content === 'a suprise to be sure, but a welcome one.') {
    message.channel.send(`https://i.redd.it/3ah6k9okldoy.jpg`)
  }
  else if (content === 'visible confusion') {
    message.channel.send(`https://pics.me.me/visible-confusion-31321000.png`)
  }
  else if (content === 'sequels') {
    message.channel.send('the prequels are so much better than the sequels!')
  }
  else if (content === `ironic`) {
    message.channel.send(`https://i.imgur.com/w3hUyFC.gif`)
  }
  else if (content === `I don't like sand`) {
    message.channel.send(`https://scatteredquotes.com/wp-content/uploads/2018/01/StarWars-AttackoftheClones-1.jpg`)
  }
  else if (content === 'this is where the fun begins') {
    message.channel.send(`https://pics.me.me/this-is-where-the-fun-begins-19229475.png`)
  }
  else if (content === `my powers have doubled since the last time we've met`) {
    message.channel.send(`https://78.media.tumblr.com/16c36f3f6952ea4b2c19165cabf087cd/tumblr_mjafwtTcaS1s7sn9ho1_500.gif`)
  }
  else if (content === `you can try...`) {
    message.channel.send(`https://media.makeameme.org/created/you-will-try-5b4368.jpg`)
  }
  // above is all prequel meme quotes, below will be help commands
  else if (content === `help`) {
    message.channel.send(`1. If you would like the see all the prequel meme quotes/other commands this bot holds, please type "!summon list"
2. How to use this bot: Use "!summon 'prequel memes quote here'". After that, the bot will send an image with the corresponding prequel meme quote.
3. If you have any questions and/or suggestions, feel free to PM Dorkito#7752 for more info and suggestions.`)
  }
  else if (content === 'list') {
    message.channel.send(`Here is a list of all the quotes we currently have:
- hello there!
- he's too dangerous to be kept alive!
- It's treason then
- dewit
- you turned her against me!
- i'll try spinning, thats a good trick!/I'll try spinning, that's a good trick!
- the tragedy of Darth Plagueis the wise
- not yet.
- a suprise to be sure, but a welcome one.
- visible confusion
- sequels (boooo *anything in the parentheses is not part of the code*)
- ironic
- help
- list
- this is where the fun begins
- my powers have doubled since the last time we've met
- wait a minute, how did this happen? We're smarter than this.
- how can you do this? It's outrageous. It's unfair.
- it's over Anakin, I have the high ground!
- only a sith deals in absolutes
- you can try...
**Note: this list is exactly how the bot will accept them**`)
  }
})
// token lul
client.login(token)
