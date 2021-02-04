const createRandomRGB = (max, min) => {
  const r = Math.floor(Math.random() * (max - min + 1)) + min;
  const g = Math.floor(Math.random() * (max - min + 1)) + min;
  const b = Math.floor(Math.random() * (max - min + 1)) + min;

  return { index: `${r}${g}${b}`, color: `rgb(${r}, ${g}, ${b})` };
};

export default createRandomRGB;
