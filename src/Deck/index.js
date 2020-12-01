import { deck } from './deck';
import { shuffle } from './shuffle';

const deckSetup = () => {
  //Get the order from the shuffle method
  const order = shuffle();
  //Get the card objects that correspond
  return order.map(num => deck[num]);
}

export default deckSetup;
export { deck, shuffle };