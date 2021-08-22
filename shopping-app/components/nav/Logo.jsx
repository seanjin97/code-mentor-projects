import { Center, Text } from '@chakra-ui/react';
import React from 'react';

export default function Logo() {
  return (
    <Center ml={[2, 2, 5, 10]} mr={2} bg="transparent">
      <Text fontSize="2xl" fontWeight="bold">
        EleShoply.
      </Text>
    </Center>
  );
}
