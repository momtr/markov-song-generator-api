const MarkovChain = require('./markovchain');
const fs = require('fs');

/** get data */
const text = fs.readFileSync('./data/lyrics.txt', { encoding: 'utf-8' });

/** train models */
let markovChainWords = new MarkovChain(text, 'words');
fs.writeFileSync('./models/mc_words.json', JSON.stringify(markovChainWords.ngram));

let markovChainNgram = new MarkovChain(text, 'ngram', { order: 2 });
fs.writeFileSync('./models/mc_ngram.json', JSON.stringify(markovChainNgram.ngram));