import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Highlight from '../components/home/Highlight';
import ItemHighlights from '../components/home/ItemHighlights';

export default function Home() {
  return (
    <Box bg="#f6f7fb" pt={[4, 4, 4, 0]}>
      <Highlight />
      <ItemHighlights />
    </Box>
  );
}
