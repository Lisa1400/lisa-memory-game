const cards = document.querySelectorAll('.card');

let turnedCard = true;
let firstCard;
let secondCard;

 function turnCard(){
    this.classList.toggle('turn');

    if(turnedCard){
        turnedCard = false;
        firstCard = this;

    }

    else{
        turnedCard = true;
        secondCard = this;

        matching();    
    }
}

function matching(){
    if(firstCard.dataset.name !== secondCard.dataset.name){
        turnBackCards();
    }

    else{ 
        freezeCards();
    }

}

function freezeCards(){
    firstCard.removeEventListener('click', turnCard);
    secondCard.removeEventListener('click', turnCard);
}

function turnBackCards(){
    setTimeout(() => {
        firstCard.classList.remove('turn');
        secondCard.classList.remove('turn');
    }, 900);
}



(function shuffle(){
    cards.forEach(card => {
        let randPosition = Math.floor(Math.random() * 12);
        card.style.order = randPosition;
    });
})();

cards.forEach(card => card.addEventListener('click', turnCard))

