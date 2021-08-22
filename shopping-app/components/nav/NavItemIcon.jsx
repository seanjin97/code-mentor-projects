import { IconButton } from '@chakra-ui/react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';

export default function NavItemIcon({ iconName }) {
  let iconType;
  if (iconName === 'heart') {
    iconType = faHeart;
  } else if (iconName === 'search') {
    iconType = faSearch;
  } else {
    iconType = faShoppingBasket;
  }
  return (
    <IconButton bg="transparent" _hover={{ bg: 'transparent', color: 'grey' }} _active={{ bg: 'transparent' }} _focus={{ border: 'transparent' }} icon={<FontAwesomeIcon icon={iconType} size="lg" />} />
  );
}

NavItemIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
};
