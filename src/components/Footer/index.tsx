/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { useHistory } from 'react-router-dom';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Home from '@material-ui/icons/Home';
import { BottomByNavigation } from './styles';

const Footer: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const navigationBetweenIcons = (rote: string) => {
    history.push(`/${rote}`);
  };

  return (
    <BottomByNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        icon={<Home />}
        onClick={() => navigationBetweenIcons('home')}
      />
      <BottomNavigationAction
        icon={<ShoppingCart />}
        onClick={() => navigationBetweenIcons('cart')}
      />
      <BottomNavigationAction
        icon={<PersonOutlineIcon />}
        onClick={() => navigationBetweenIcons('profile')}
      />
    </BottomByNavigation>
  );
};

export default Footer;
