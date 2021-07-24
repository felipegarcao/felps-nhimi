import { Flex, Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import {MoonIcon, SunIcon } from '@chakra-ui/icons'


function Topbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue('#FFFF', '#1A202C');
  const color = useColorModeValue('#1A202C', '#EDEEEE');
  const borderColor = useColorModeValue('#DDD', '#272727A');

  return (
    <Flex
      w="full"
      position="fixed"
      zIndex={9999}
      bgColor={bg}
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
        {colorMode === "light" ? (
          <MoonIcon w={6} h={6} onClick={toggleColorMode} />
        ) : (
          <SunIcon w={6} h={6} onClick={toggleColorMode} />
        )}
      </Flex>
    </Flex>
  );
}

export default Topbar;
