# markov-song-generator-api
🎶 song generator API using markov chains

## Example
<img src="https://github.com/moritzmitterdorfer/markov-song-generator-api/blob/master/img.png">

## Install
1. Clone repo
```
$ git clone https://github.com/moritzmitterdorfer/markov-song-generator-api.git
```

2. Install NPM packages
```
$ npm install
```

3. Start server
```
$ npm start
```


If you want to use custom lyrics, place a file (`lyrics.txt`) in `./data`

## Endpoints
### GET /api/v1/ngram/{length}
Sends html body back, which contains generated lyrics (with 2nd order ngram)<br>
*length* - length of output (number of letters:2)

### GET /api/v1/words/{length}
Sends html body back, which contains generated lyrics (full words)<br>
*length* - number of words 
