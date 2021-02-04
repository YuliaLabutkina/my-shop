const createRandomPrice = () => {
  return Math.floor(Math.random() * (49 - 1 + 1)) + 1;
};

export default createRandomPrice;
