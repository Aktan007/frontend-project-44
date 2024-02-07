const getRandomNum = (n = 10) => {
  const num = Math.random() * n;
  return Math.ceil(num);
};

export default getRandomNum;
