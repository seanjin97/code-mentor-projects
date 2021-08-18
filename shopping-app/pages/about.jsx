import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

export default function about() {
  return (
    <>
      <Box>Hello there</Box>
      <Box m={2} color="red">Tomato</Box>
      <Text fontSize={32} textAlign={['left', 'center']}>What is going on</Text>
      <Button
        _hover={{
          background: 'white',
          color: 'teal.500',
        }}
        borderRadius="10"
      >
        Button

      </Button>
    </>
  );
}
