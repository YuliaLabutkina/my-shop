import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import routes from '../../routes';
import Button from '../../components/Button/Button';
import { getProducts } from '../../redux/selectors';
import cardActions from '../../redux/card/card-action';

import {
  Container,
  ProductColor,
  SelectContainer,
} from './ProductDetailsPage.style';

const ProductDetailsPage = ({ match, history }) => {
  const {
    params: { productId },
  } = match;

  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const [product, setProduct] = useState(() =>
    products.find(prod => prod.id === productId),
  );
  const [prise, setPrise] = useState(product?.price);
  const [something, setSomething] = useState(0);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    if (!product) {
      history.push(routes.home);
    }
  }, []);

  const addSomething = ({ target }) => {
    setSomething(Number(target.value));
    setPrise((product.price + Number(target.value)) * amount);
  };

  const isClearPrice = () => {
    setPrise(product.price);
    setAmount(1);
    setSomething(0);
  };

  const isSubtract = () => {
    if (amount === 1) return;
    setPrise(prise - prise / amount);
    setAmount(amount - 1);
  };

  const isAddAmount = () => {
    setPrise(prise + prise / amount);
    setAmount(amount + 1);
  };

  const isAddToCard = () => {
    const productId = something ? `${product.id}/${something}` : product.id;
    dispatch(
      cardActions.addToCard({
        ...product,
        id: productId,
        amount: amount,
        price: prise / amount,
      }),
    );
  };

  return (
    <>
      <h2>ProductDetailsPage</h2>
      <Container>
        <ProductColor color={product?.color}>
          Color: {product?.color}
          <p>Price: {product?.price}$</p>
        </ProductColor>
        <div>
          <p>Price: {prise}$</p>
          <SelectContainer>
            <select name="something" value={something} onChange={addSomething}>
              <option value="0">0$</option>
              <option value="10">Small 10$</option>
              <option value="20">Medium 20$</option>
              <option value="30">Large 30$</option>
            </select>
            <button onClick={isClearPrice}>Clear</button>
          </SelectContainer>
          <div>
            <button onClick={isSubtract} disabled={amount < 2 ? true : false}>
              -1
            </button>
            <span>{amount}</span>
            <button onClick={isAddAmount}>+1</button>
          </div>
        </div>
      </Container>
      <Button text="Add to Card" onClick={isAddToCard}></Button>
    </>
  );
};

export default ProductDetailsPage;
