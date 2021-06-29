import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Tagaiatto</Text>
        <Text color="gray.300" fontSize="small">
          edilsonmneto@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Edilson Mendes" src="https://github.com/tagaiatto.png" />
    </Flex>
  );
}