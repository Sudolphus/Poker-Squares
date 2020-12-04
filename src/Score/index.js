import scoreCard from './scoreCard';

const Score = arr => {
  const rankings = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];
  const [handRanks, handSuits] = [[], []];
  for (let card of arr) {
    handRanks.push(card.rank);
    handSuits.push(card.suit);
  }
  let [straight, flush, fourOfAKind, threeOfAKind, numPairs] = [false, true, false, false, 0];
  for (let i = 0; i <= 9; ++i) {
    if (handRanks.includes(rankings[i]) && handRanks.includes(rankings[i] + 1) && handRanks.includes(rankings[i] + 2) && handRanks.includes(rankings[i] + 3) && handRanks.includes(rankings[i] + 4)) {
      straight = true;
      break;
    }
  }
  for (let i = 1; i < 5; ++i) {
    if (handSuits[i] !== handSuits[0]) {
      flush = false;
      break;
    }
  }
  if (!straight && !flush) {
    for (let rank of rankings.slice(1)) {
      let count = 0;
      for (let card of handRanks) {
        if (card === rank) {
          count++;
        }
      }
      if (count === 4) {
        fourOfAKind = true;
        break;
      } else if (count === 3) {
        threeOfAKind = true;
      } else if (count === 2) {
        numPairs++;
      }
    }
  }

  let [name, points] = [null, null];
  if (straight && flush && handRanks.includes('Ace') && handRanks.includes('King')) {
    [name, points] = ['Royal Flush', 100];
  } else if (straight && flush) {
    [name, points] = ['Straight Flush', 75];
  } else if (fourOfAKind) {
    [name, points] = ['Four of a Kind', 50];
  } else if (threeOfAKind && numPairs === 1) {
    [name, points] = ['Full House', 25];
  } else if (flush) {
    [name, points] = ['Flush', 20];
  } else if (straight) {
    [name, points] = ['Straight', 15];
  } else if (threeOfAKind) {
    [name, points] = ['Three of a Kind', 10];
  } else if (numPairs === 2) {
    [name, points] = ['Two Pair', 5];
  } else if (numPairs === 1) {
    [name, points] = ['One Pair', 2];
  } else {
    [name, points] = ['Nothing', 0];
  }

  return { name, points };
}

export default Score;
export { scoreCard };