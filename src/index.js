const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);

window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  document.querySelector("#memory-board").innerHTML = html;

  const cards = document.querySelectorAll(".card");
  let chosenCards = [];
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.add("turned");
      chosenCards.push(card);
      if (chosenCards.length === 2) {
        const [card1, card2] = chosenCards;
        const name1 = card1.getAttribute("data-card-name");
        const name2 = card2.getAttribute("data-card-name");
        if (memoryGame.checkIfPair(name1, name2)) {
          card1.classList.add("blocked");
          card2.classList.add("blocked");
          if (memoryGame.checkIfFinished()) {
            document.querySelector("#memory-board").innerHTML = "";
            let h1 = document.createElement("h1");
            h1.style.color = "pink";
            h1.innerHTML = "YOU WON!!!";
            document.querySelector("#memory-board").appendChild(h1);
          }
        } else {
          setTimeout(() => {
            card1.classList.remove("turned");
            card2.classList.remove("turned");
          }, 1000);
        }
        chosenCards = [];
      }
    });
  });
});
