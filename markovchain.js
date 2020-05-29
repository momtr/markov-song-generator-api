class MarkovChain {

    constructor(text, options) {
        this.text = text.toLowerCase();
        this.ngram = {};
        this.type = options.type;
        if(this.type == 'ngram') {
            this.order = options.order;
            for(let i = 0; i <= this.text.length - this.order; i++) {
                let st = this.text.substring(i, i + this.order);
                let next = this.text.substring(i + this.order, i + 2 * this.order);
                if(!this.ngram[st]) {
                    this.ngram[st] = [next];
                } else {
                    this.ngram[st].push(next);
                }
            }
        } else if(this.type == 'words') {
            let words = this.text.split(' ');
            for(let i = 0; i < words.length - 1; i++) {
                if(!this.ngram[words[i]])
                    this.ngram[words[i]] = [words[i+1]];
                else
                    this.ngram[words[i]].push(words[i+1]);
            }
        } else {
            this.ngram = options.jsonModel;
            this.jsonType = options.jsonType;
        }
    }

    randomElementOfArray(ar) {
        if(!ar)
            return -1;
        return ar[Math.floor(Math.random() * ar.length)];
    }

    generate(length) {
        let text = '';
        let current = this.randomElementOfArray(Object.keys(this.ngram));
        for(let i = 0; i < length; i++) {
            let newW = this.randomElementOfArray(this.ngram[current]);
            if(newW === -1)
                newW = this.randomElementOfArray(Object.keys(this.ngram));
            text += newW;
            if(this.type == 'words' || this.jsonType == 'words')
                text += ' '
            current = newW;
        }
        return text;
    }

}

module.exports = MarkovChain;