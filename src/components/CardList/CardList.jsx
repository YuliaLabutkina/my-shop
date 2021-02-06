import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getOrderAmount, getSumOfUnits } from '../../redux/selectors';
import routes from '../../routes';
import CardItem from './CardItem/CardItem';
import { List, ListItem, Text, Button } from './CardList.style';

const CardList = ({ card }) => {
  const orderAmount = useSelector(getOrderAmount);
  const sumOfUnits = useSelector(getSumOfUnits);

  return (
    <List>
      {card.map(product => (
        <CardItem key={product.id} product={product}></CardItem>
      ))}
      <ListItem>
        <div>
          <Text>Total</Text>
          <span>* {sumOfUnits}</span>
        </div>
        <div>{orderAmount}$</div>
      </ListItem>
      <li>
        <NavLink
          to={routes.cardPage}
          className="navLink"
          activeClassName="navLink--active"
        >
          <Button>Go to Checkout</Button>
        </NavLink>
      </li>
    </List>
  );
};

export default CardList;
