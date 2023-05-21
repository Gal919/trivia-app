const createId = () => {
  return Math.floor(Math.random() * 100000);
};

const shuffleAns = (arr) => {
  arr.sort(() => Math.random() - 0.5);
  return arr;
};

export { createId, shuffleAns };
