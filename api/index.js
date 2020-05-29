const express = require('express');
const router = express.Router();

const MarkovChain = require('../markovchain');
const markovChainWordsModelJSON = require('../models/mc_words.json');
const markovChainNgramModelJSON = require('../models/mc_ngram.json');
const mc_words = new MarkovChain('', { type: 'model', jsonModel: markovChainWordsModelJSON, jsonType: 'words' });
const mc_ngram = new MarkovChain('', { type: 'model', jsonModel: markovChainNgramModelJSON, jsonType: 'ngram' });

router.get('/ngram/:length', (req, res, next) => {
    let generate = mc_ngram.generate(req.params.length);
    generate = generate.split('\n').join('<br>');
    res.send(generate);
});

router.get('/words/:length', (req, res, next) => {
    let generate = mc_words.generate(req.params.length);
    generate = generate.split('\n').join('<br>');
    res.send(generate);
});

module.exports = router;