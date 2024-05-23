let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
// let playerEl = document.getElementById("player-el");

let message = "";
let hasBlackJack = false;
let isAlive = false;

let firstCard = Math.floor(2 + Math.random() * 10);
let secondCard = Math.floor(2 + Math.random() * 10);
let sum = 0;

let cards = [];

// let player = {
//   name: "Per: ",
//   chips: 200,
// };

// playerEl.textContent = player.name + "$" + player.chips;

function startGame() {
  isAlive = true;
  let firstCard = Math.floor(2 + Math.random() * 10);
  let secondCard = Math.floor(2 + Math.random() * 10);
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}
function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = Math.floor(2 + Math.random() * 10);

    sum += card;

    cards.push(card);

    renderGame();
  }
}
