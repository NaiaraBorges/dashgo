import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Naiara Borges</Text>
        <Text color="gray.300" fontSize="small">
          naaaidev@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Naiara Borges"
        src="https://github.com/NaiaraBorges.png"
      />
    </Flex>
  );
}
