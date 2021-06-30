import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Tagaiatto</Text>
          <Text color="gray.300" fontSize="small">
            edilsonmneto@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Edilson Mendes" src="https://github.com/tagaiatto.png" />
    </Flex>
  );
}