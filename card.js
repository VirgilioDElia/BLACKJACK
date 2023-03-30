function Card(number, type){
    this.number = number;
    this.type = type;
    if(this.number > 0 && this.number <11 && this.number !=1){
        this.value = this.number;
    } else if(this.number == 1){
        this.value=11;
        if(this.score>21){
            this.value=1;
        }else{
            this.value=11;
        }
    }else{
        this.value = 10;
    }
    this.imageName = this.loadImage();
}

Card.prototype.toString = function(){
    let cardName = `${this.number}`;
    if(this.number == 11){
        cardName = 'Jack';
    } else if(this.number == 12){
            cardName = 'Queen';
    } else if(this.number == 13){
        cardName = 'King';
    }
    return `${this.number} of ${this.type}`;
};

Card.prototype.getCardNameForImage = function(){
    if(this.number == 1){
        return 'asso';
    }
    else if(this.number > 1 && this.number < 11){
        return `${this.numeber}`;
    }
    else if(this.number == 11){
        return 'j';
    } else if(this.number == 12){
        return 'q';
    } else if(this.number == 13){
        return 'k';
    }
};

Card.prototype.getSuitForImage = function(){
    if(this.type == "hearts"){
        return "c" ;
    }else if(this.type == "clubs"){
        return"f" ;
    }else if(this.type == "diamonds"){
        return "q";
    }else if(this.type == "spades"){
        return "p" ;
    }
};

Card.prototype.loadImage = function(){
    return `${this.getSuitForImage()}${this.getCardNameForImage()}.png`;
};