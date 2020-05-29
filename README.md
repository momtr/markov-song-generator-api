# markov-song-generator-api
🎶 song generator API using markov chains

## Example
<ing src="https://github.com/moritzmitterdorfer/markov-song-generator-api/blob/master/img.png">

## Install
```
npm install
node server.js
```
If you want to use custom lyrics, place a file (`lyrics.txt`) in `./data`

## Endpoints
### GET /api/v1/ngram/{length}
Sends html body back, which contains generated lyrics (with 2nd order ngram)<br>
*length* - length of output (number of letters:2)

### GET /api/v1/words/{length}
Sends html body back, which contains generated lyrics (full words)<br>
*length* - number of words 
