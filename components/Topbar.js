import { Flex, Box } from "@chakra-ui/react";

function Topbar() {
  const bgColor = "#fff";
  const color = "#1A202C";
  const borderColor = "#ddd";
  return (
    <Flex
      w="full"
      position="fixed"
      zIndex={9999}
      bgColor={bgColor}
      color={color}
      borderBottom={`1px solid ${borderColor}`}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        w="full"
        maxW="1200px"
        margin="0 auto"
        h="60px"
        px={[4, 8]} // small -> Medium

      >
        <Box>Felps</Box>
        
        <Box>Login</Box>
      </Flex>
    </Flex>
  );
}

export default Topbar;
