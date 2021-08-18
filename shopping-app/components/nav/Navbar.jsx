import {
  Box,
  Button, Menu, MenuButton, MenuItem, MenuList, Text,
} from '@chakra-ui/react';
import React from 'react';
import styles from '../../styles/Nav.module.css';

export default function Navbar() {
  return (
    <Box>
      <Menu>
        <Box
          width={['50px', '100px', '150px']}
          height={['50px', '100px', '150px']}
          bg="#393d46"
          display="flex"
          justifyContent="center"
        >
          <MenuButton
            as={Button}
            aria-label="Options"
          >
            <i style={{ color: 'white' }} className="fas fa-bars" />
          </MenuButton>
        </Box>

        <MenuList>
          <MenuItem>
            Home
          </MenuItem>
          <MenuItem>
            About Us
          </MenuItem>
          <MenuItem>
            Product Collection
          </MenuItem>
          <MenuItem>
            Cart
          </MenuItem>
          <MenuItem>
            My Account
          </MenuItem>
          <MenuItem>
            Checkout
          </MenuItem>
          <MenuItem>
            Contact Us
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
