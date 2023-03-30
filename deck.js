function Deck(){
    let cards = [];
    let types = ["spades", "diamonds", "clubs", "hearts"];
    for(let i = 1; i < 14; i++){
        for(let t of types ){
            let c = new Card(i,t);
            cards.push(c);
        }
    }
    this.cards = cards;
}

Deck.prototype.shuffle = function (){
    for(let i = 0; i < 1000 ; i++){
        let pos1 = Math.floor((Math.random() * this.cards.length));
        let pos2 = Math.floor((Math.random() * this.cards.length));
        let p = this.cards[pos1];
        this.cards[pos1] = this.cards[pos2];
        this.cards[pos2] = p;
    }
};

Deck.prototype.getCard = function(){
    let c = this.cards.pop();
    return c;
};