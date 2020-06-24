// const playerHand = document.getElementById("player-hand");
const playerHandCards = document.getElementById("player-hand-cards");

function getCardSelectOffset(cardWidthPercent, cardHeightPercent) {
  const handHeight = playerHandCards.offsetHeight;
  const handWidth = playerHandCards.offsetWidth;
  const cardWidthPx = (handWidth * cardWidthPercent) / 100;
  const cardHeightPx = (cardWidthPx * cardHeightPercent) / 100;

  let cardSelectOffset = cardHeightPx - handHeight;
  // Always shift bottom -> up
  if (cardSelectOffset < 10) cardSelectOffset = 10;
  return cardSelectOffset;
}

let cardSelectOffset = getCardSelectOffset(15, 150);
let card;
playerHandCards.addEventListener("mouseover", (event) => {
  const target = event.target;
  card = target.closest(".card-frame-hand");
  if (card) {
    card.style.transform = `translate(0, ${-cardSelectOffset}px)`;
  }
});

playerHandCards.addEventListener("mouseout", () => {
  card.style.transform = "translate(0, 0)";
});

window.addEventListener("resize", () => {
  cardSelectOffset = getCardSelectOffset(15, 150);
});
