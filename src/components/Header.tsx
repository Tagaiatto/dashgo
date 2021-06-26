import { Flex } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      marginX="auto"
      mt="4"
      px="6"
      align="center"
    >
      <h1>Header</h1>
    </Flex>
  );
}