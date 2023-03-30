function BlackJack(containerId){
    this.deck = new Deck();
    this.container = document.querySelector(`#${containerId}`);
    
}

BlackJack.prototype.init = function(){
    let b = document.createElement("button");
    b.setAttribute('id',"startGame");
    b.innerText = "Start Game";
    this.container.appendChild(b);
    b.addEventListener("click", this.startGame.bind(this));
};

BlackJack.prototype.startGame = function(){
    this.deck.shuffle();
    let imagePrefix = "img/carte_francesi/";
    let c1 = this.deck.getCard();
    let c2 = this.deck.getCard();
    let playerTable = document.createElement("table");
    playerTable.setAttribute('id',"playerTable");
    this.container.appendChild(playerTable);
    let img1 = document.createElement("img");
    img1.setAttribute('src',`${imagePrefix}${c1.imageName}`);
    playerTable.appendChild(img1);
    let img2 = document.createElement("img");
    img2.setAttribute('src',`${imagePrefix}${c2.imageName}`);
    playerTable.appendChild(img2);
    let score = c1.value + c2.value;
    let paragraph = document.createElement("p");
    this.container.appendChild(paragraph);
    paragraph.innerText = `Il tuo punteggio è di ${score}`;
    let stay = document.createElement("button");
    stay.setAttribute('id',"Stay");
    stay.innerText = "Stay";
    this.container.appendChild(stay);
    let hit = document.createElement("button");
    hit.setAttribute('id',"Hit");
    hit.innerText = "Hit";
    this.container.appendChild(hit);

};

let game = new BlackJack("container");

game.init();