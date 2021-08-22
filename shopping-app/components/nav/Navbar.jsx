import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import Logo from './Logo';
import NavItems from './NavItems';

export default function Navbar() {
  return (
    <Flex direction={['column', 'column', 'row', 'row']} bg="#f6f7fb">
      <HamburgerMenu />
      <Logo />
      <NavItems />
    </Flex>
  );
}
