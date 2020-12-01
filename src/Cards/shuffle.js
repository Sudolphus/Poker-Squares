export const shuffle = () => {
  //Start by generating an array of integers to be swapped
  const order = [...Array(52).keys()];
  //Counting backwards from the end, generate a random number from the unswapped range, then swap that index with the first element of the swapped range
  for (let i = 51; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    const temp = order[i];
    order[i] = order[j];
    order[j] = temp;
  }
  return order;
}