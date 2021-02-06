import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getCard, getSumOfUnits, getOrderAmount } from '../../redux/selectors';
import CardPageItem from './CardPageItem/CardPageItem';
import UserForm from '../../components/UserForm/UserForm';
import routes from '../../routes';
import { ListItem, Text, Quantity, Messages } from './CardPage.style';

const CardPage = ({ history }) => {
  const card = useSelector(getCard);
  const orderAmount = useSelector(getOrderAmount);
  const sumOfUnits = useSelector(getSumOfUnits);

  useEffect(() => {
    if (!card.length) {
      history.push(routes.home);
    }
  }, []);

  const isGoToShopping = () => {
    history.push(routes.home);
  };

  return (
    <div>
      {card.length === 0 && (
        <div>
          <Messages>Your cart is currently empty.</Messages>
          <button onClick={isGoToShopping}>Go to shopping</button>
        </div>
      )}
      {card.length > 0 && (
        <>
          <ul>
            {card.map(card => {
              return <CardPageItem key={card.id} card={card} />;
            })}
            <ListItem>
              <Text>Total</Text>
              <Quantity>* {sumOfUnits}</Quantity>
              <div>{orderAmount}$</div>
            </ListItem>
          </ul>
        </>
      )}
      {card.length > 0 && <UserForm />}
    </div>
  );
};

export default CardPage;
