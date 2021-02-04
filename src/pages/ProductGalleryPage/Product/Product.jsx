import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import productActions from '../../../redux/product/product-action';
import { ProductColor } from './Product.style';

const Product = ({ price, color, id }) => {
  const dispatch = useDispatch();

  const addProduct = () => {
    dispatch(productActions.addToCard({ id, price, color, amount: 1 }));
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
