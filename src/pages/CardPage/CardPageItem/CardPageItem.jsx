import { useDispatch } from 'react-redux';

import cardActions from '../../../redux/card/card-action';
import { Item, ColorContainer, Container } from './CardPageItem.style';

const CardPageItem = ({ card }) => {
  const { id, amount, price, color } = card;
  const dispatch = useDispatch();

  const isAddToCard = () => {
    dispatch(cardActions.addToCardOneProduct(id));
  };

  const isDelToCard = () => {
    dispatch(cardActions.delToCard(id));
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
