class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) {
      return undefined;
    }
    const copy = [...this.cards];
    const shuffled = [];
    for (let i = copy.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * copy.length);
      const randomElement = copy[randomIndex];
      shuffled.push(randomElement);
      copy.splice(randomIndex, 1);
    }
    this.cards = shuffled;
    return this.cards;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
    }
    return card1 === card2;
  }

  checkIfFinished() {
    // ... write your code here
    const totalPairs = this.cards.length / 2;
    if (this.pairsGuessed === totalPairs) {
      return true;
    } else {
      return false;
    }
  }
}
