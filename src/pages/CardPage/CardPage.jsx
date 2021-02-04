import { useSelector } from 'react-redux';

import {
  getCard,
  getSumOfUnits,
  getOrderAmount,
} from '../../redux/product/product-selector';
import CardPageItem from './CardPageItem/CardPageItem';
import { ListItem, Text, Quantity } from './CardPage.style';

const CardPage = () => {
  const card = useSelector(getCard);
  const orderAmount = useSelector(getOrderAmount);
  const sumOfUnits = useSelector(getSumOfUnits);

  return (
    <div>
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
    </div>
  );
};

export default CardPage;
