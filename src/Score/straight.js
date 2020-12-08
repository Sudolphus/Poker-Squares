const isStraight = cardRanks => {
  const rankings = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
  const ranks = cardRanks.map(card => rankings.indexOf(card)).sort((x, y) => x-y);
  if (ranks[0] === 0) {
    if (ranks[1] === 1 && ranks[2] === 2 && ranks[3] === 3 && ranks[4] === 4) {
      return true;
    } else if (ranks[1] === 9 && ranks[2] === 10 && ranks[3] === 11 && ranks[4] === 12) {
      return true;
    } else {
      return false;
    }
  } else {
    for (let i = 0; i < 4; i++) {
      if (ranks[i] + 1 !== ranks[i+1]) {
        return false;
      }
    }
    return true;
  }
}

export default isStraight;