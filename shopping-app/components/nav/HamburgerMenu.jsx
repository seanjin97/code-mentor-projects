import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Center, IconButton, Menu, MenuButton, MenuItem, MenuList,
} from '@chakra-ui/react';
import React from 'react';

export default function HamburgerMenu() {
  return (
    <Center
      width={['50px', '50px', '100px', '150px']}
      height={['50px', '50px', '100px', '150px']}
      bg="#393d46"
    >
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={isOpen ? <CloseIcon bg="transparent" color="white" /> : <HamburgerIcon w={5} h={5} bg="transparent" color="white" />}
              variant="unstyled"
              _focus={{ border: 'transparent' }}
            />
            <MenuList width="100vw" p={0} bg="#393d46" color="#ffffff" border="transparent" borderRadius={0} mt={[-1, -1, 5, 10]}>
              {['Home', 'About us', 'Product Collection', 'Cart', 'My Account', 'Checkout'].map((item) => (
                <MenuItem key={item} _focus={{ bg: 'transparent' }} _hover={{ bg: 'grey' }}>{item}</MenuItem>
              ))}
            </MenuList>
          </>
        )}
      </Menu>
    </Center>

  );
}
