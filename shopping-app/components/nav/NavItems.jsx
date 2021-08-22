import {
  HStack, Button, Box,
} from '@chakra-ui/react';
import React from 'react';
import NavItemIcon from './NavItemIcon';

export default function NavItems() {
  return (
    <HStack ml="auto">
      {['search', 'heart', 'basket'].map((item) => (<NavItemIcon key={item} iconName={item} />))}
      <Button type="unstyled" bg="#393d46" color="#ffffff" _hover={{ bg: '#000000' }} px={6} borderRadius={0} onClick={() => console.log('hello there')}>Login</Button>
      <Box width={['50px', '50px', '100px', '150px']} />
    </HStack>
  );
}
