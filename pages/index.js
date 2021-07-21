import { Box, Heading } from "@chakra-ui/react";
import useAuth from "./../hooks/useAuth";

export default function Home() {
  const { user, signin } = useAuth();
  console.log("user", user);
  return (
    <Box bg="gray.100" w="100%" p={4}>
     <Heading as="h2" size="3xl" isTruncated>
       Aprenda Programação Direto Ao Ponto
     </Heading>
    </Box>
  );
}
