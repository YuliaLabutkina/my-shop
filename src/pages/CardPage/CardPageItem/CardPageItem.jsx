import { useDispatch } from 'react-redux';

import productActions from '../../../redux/product/product-action';
import { Item, ColorContainer, Container } from './CardPageItem.style';

const CardPageItem = ({ card }) => {
  const { id, amount, price, color } = card;
  const dispatch = useDispatch();

  const isAddToCard = () => {
    dispatch(productActions.addToCardOneProduct(id));
  };

  const isDelToCard = () => {
    dispatch(productActions.delToCard(id));
  };

  return (
    <Item>
      <Container>
        <ColorContainer color={color} />
        <span>* {amount}</span>
      </Container>
      <div>{price}$</div>
      <div>
        <button onClick={isAddToCard}>Add</button>
        <button onClick={isDelToCard}>Del</button>
      </div>
    </Item>
  );
};

export default CardPageItem;
