import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
// import useAuth from "src/hooks/useAuth";
import Layout from "src/components/Layout";
import { getAllTechnologies } from "src/lib/dato-cms";

const Cover = ({ technologies }) => {
  const bgColor = "#FFF";
  return (
    <Box bgColor={bgColor}>
      <Flex px={[4, 10]} py={[0, 20]} w="full" maxW="1200px" direction="column">
        <Heading
          as="h1"
          fontSize={{ base: "42px", md: "52px", lg: "72px" }}
          mb={4}
          fontWeight="xBold"
        >
          Aprenda Programação
          <Box>Direto ao Ponto</Box>
          <Box bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text">
            100% Free
          </Box>
        </Heading>
        <Text fontSize={{ base: "16px", md: "20px", lg: "22px" }}>
          <Box>
            Mantenha seus conhecimentos atualizados com as mais novas{""}
          </Box>
          <Box>Tecnologias que estão disponiveis no Mercado!</Box>
        </Text>
        <Box>
          <Button
            as="a"
            my={10}
            colorScheme="purple"
            variant="outline"
            size="lg"
            href="#series"
          >
            Bora Começar !
          </Button>
        </Box>
        
        {technologies.map(t => (
          console.log(t),
          <Box key={t.id}>
            {t.name}
            <img src={t.logo.url} />
          </Box>
        ))}
      
      </Flex>
    </Box>
  );
};

export default function Home({ technologies }) {
  // const { user, signin } = useAuth();
  return (
    <Layout>
      <Cover technologies={technologies} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const technologies = await getAllTechnologies();

  return {
    props: {
      technologies,
    },
    revalidate: 120,
  };
};
