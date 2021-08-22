import React from 'react';
import {
  Box, Button, Center, Flex, Image, Text,
} from '@chakra-ui/react';

export default function Highlight() {
  return (
    <Center mb={9}>
      <Box
        width={['50px', '50px', '100px', '150px']}
      />
      <Box bg="white" flexGrow="1">
        <Flex direction={['column', 'column', 'column', 'column', 'row']} justifyContent="space-around">
          <Box pt={[5, 5, '100px', '150px']} pl={[5, 5, '100px', '150px']}>
            <Text fontSize={['4xl', '4xl', '6xl', '8xl']} color="#393d46" fontWeight="bold">
              Winter 21&apos;
            </Text>
            <Text color="#393d46" opacity="0.8">
              Winter layer season is here.
              Checkout our trendy new winter collection to stay warm in style.
            </Text>
            <Text display="flex" mt={[5, 5, 7, 10]}>
              Price:
              <Text ml="3" fontSize="3xl" color="#393d46" fontWeight="bold">$117.99</Text>
            </Text>
            <Button height={['30px', '30px', '50px', '50px']} width={['100px', '100px', '200px', '200px']} mt={8} as="a" outlineColor="black" borderRadius="0">Shop now</Button>
          </Box>
          <Image pt={[5, 5, '60px', '60px']} objectFit="scale-down" boxSize={['600px', '600px', '600px', '600px']} alt="winter model" src="https://static.live.templately.com/2020/06/de17b27a-image-1.png" />
        </Flex>
      </Box>
      <Box width={['50px', '50px', '100px', '150px']} />
    </Center>
  );
}
