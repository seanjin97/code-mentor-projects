import {
  Box, Center, Text,
} from '@chakra-ui/react';
import React from 'react';

export default function ItemHighlights() {
  return (
    <Center mt={9}>
      <Box
        width={['50px', '50px', '100px', '150px']}
      />
      <Box bg="white" flexGrow="1">
        <Text color="#393d46" fontSize={['4xl', '4xl', '6xl', '6xl']}>Our products</Text>
      </Box>
      <Box width={['50px', '50px', '100px', '150px']} />
    </Center>
  );
}
