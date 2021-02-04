import CardItem from './CardItem/CardItem';
import { List } from './CardList.style';

const CardList = ({ card }) => {
  return (
    <List>
      {card.map(product => (
        <CardItem key={product.id} product={product}></CardItem>
      ))}
      <li>
        <button>Go to Checkout</button>
      </li>
    </List>
  );
};

export default CardList;
