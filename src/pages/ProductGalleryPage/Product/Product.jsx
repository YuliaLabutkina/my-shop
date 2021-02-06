import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import cardActions from '../../../redux/card/card-action';
import { ProductColor } from './Product.style';

const Product = ({ price, color, id }) => {
  const dispatch = useDispatch();

  const addProduct = () => {
    dispatch(cardActions.addToCard({ id, price, color, amount: 1 }));
  };

  return (
    <li>
      <div>
        <Link to={`/product/${id}`}>
          <ProductColor color={color} />
          <p>{price}$</p>
        </Link>
      </div>
      <button onClick={addProduct}>Add to card</button>
    </li>
  );
};

export default Product;
