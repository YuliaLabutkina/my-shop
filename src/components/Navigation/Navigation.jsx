import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes from '../../routes';
import CardList from '../CardList/CardList';
import { getCard } from '../../redux/selectors';
import { Menu } from './Navigation.style';

const Navigation = () => {
  const card = useSelector(getCard);
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(true);
  };

  const hideMenu = () => {
    setMenu(false);
  };

  return (
    <div>
      <NavLink
        to={routes.home}
        exact
        className="navLink"
        activeClassName="navLink--active"
      >
        Home
      </NavLink>
      <Menu onMouseEnter={showMenu} onMouseLeave={hideMenu}>
        Card
        {menu && card.length > 0 && <CardList card={card} />}
      </Menu>
    </div>
  );
};

export default Navigation;
