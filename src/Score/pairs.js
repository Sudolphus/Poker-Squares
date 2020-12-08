const pairs = ranks => {
  let count = 0;
  for (let i = 0; i < 4; i++) {
    if (ranks[i] === ranks[i+1] && ranks[i] !== ranks[i+2]) {
      count++;
    }
  }
  return count;
}

export default pairs;