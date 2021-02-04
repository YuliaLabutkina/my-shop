import { Item, ColorContainer, Container } from './CardItem.style';

const CardItem = ({ product }) => {
  const { amount, price, color } = product;
  return (
    <Item>
      <Container>
        <ColorContainer color={color} />
        <div>* {amount}</div>
      </Container>
      <div>{price}$</div>
    </Item>
  );
};

export default CardItem;
