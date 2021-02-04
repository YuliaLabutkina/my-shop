import createRandomPrice from './createRandomPrice';
import createRandomRGB from './createRandomRGB';

const createProduct = (prod = []) => {
  const isHowManyProducts = prod.length + 5;
  const products = [...prod];

  while (isHowManyProducts !== products.length) {
    const productId = products.length ? products.map(el => el.id) : [];
    const { index, color } = createRandomRGB(0, 255);

    if (products.length === 0 || !productId.find(id => id === index)) {
      products.push({ id: index, price: createRandomPrice(), color: color });
      // products.push({ [id]: { price: createRandomPrice(), color: color } });
    }
  }
  return products;
};

export default createProduct;
