const isFlush = hand => {
  const suits = hand.map(card => card.suit).sort();
  return suits[0] === suits[4];
}

export default isFlush;