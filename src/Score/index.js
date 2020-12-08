import ScoreCard from './scoreCard';

const Score = hand => {
  const rankings = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
  const ranks = hand.map(card => rankings.indexOf(card.rank)).sort((x,y) => x-y);
  const suits = hand.map(card => card.suit).sort();
  const straight = ranks[0] === 0
    ? (ranks[1] === 1 && ranks[2] === 2 && ranks[3] === 3 && ranks[4] === 4) || (ranks[1] === 9 && ranks[2] === 10 && ranks[3] === 11 && ranks[4] === 12)
    : ranks[1] - ranks[0] === 1 && ranks[2] - ranks[1] === 1 && ranks[3] - ranks[2] === 1 && ranks[4] - ranks[3] === 1;
  const flush = suits[0] === suits[4];

  let [name, points] = [null, null];
  if (straight && flush && ranks.includes('Ace') && ranks.includes('King')) {
    [name, points] = ['Royal Flush', 100];
  } else if (straight && flush) {
    [name, points] = ['Straight Flush', 75];
  } else if (ranks[0] === ranks[3] || ranks[1] === ranks[4]) {
    [name, points] = ['Four of a Kind', 50];
  } else if ((ranks[0] === ranks[1] && ranks[2] === ranks[4]) || (ranks[0] === ranks[2] && ranks[3] === ranks[4])) {
    [name, points] = ['Full House', 25];
  } else if (flush) {
    [name, points] = ['Flush', 20];
  } else if (straight) {
    [name, points] = ['Straight', 15];
  } else if (ranks[0] === ranks[2] || ranks[1] === ranks[3] || ranks[2] === ranks[4]) {
    [name, points] = ['Three of a Kind', 10];
  } else if ((ranks[0] === ranks[1] && ranks[2] === ranks[3]) || (ranks[1] === ranks[2] && ranks[3] === ranks[4]) || (ranks[0] === ranks[1] && ranks[3] === ranks[4])) {
    [name, points] = ['Two Pair', 5];
  } else if (ranks[0] === ranks[1] || ranks[1] === ranks[2] || ranks[2] === ranks[3] || ranks[3] === ranks[4]) {
    [name, points] = ['One Pair', 2];
  } else {
    [name, points] = ['Nothing', 0];
  }

  return { name, points };
}

export default Score;
export { ScoreCard };