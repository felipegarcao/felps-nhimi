import {
  Box,
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  List,
  ListItem,
  ListIcon,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link,
  Button
} from '@chakra-ui/react';
import { MdCheckCircle, MdPlayCircleOutline } from 'react-icons/md';
import Image from 'next/image';
import useAuth from 'src/hooks/useAuth';
import { useRouter } from 'next/router';
import withAuthModal from 'src/components/Auth';


const SerieViewContent = ({ serie, openAuthModal }) => {
  const { user } = useAuth();
  const router = useRouter();

  const handlePlayerClick = (season, episode) => {
    if (!user) {
      openAuthModal();
    } else {
      router.push(`/player/${serie.slug}/${season.slug}/${episode.slug}`);
    }
  };

  return (
    <Box>
      <Flex justifyContent="center" py={8}>
        <Flex px={[4, 8]} w="full" maxW="1200px" direction="column">
          <Grid templateColumns={[null, '2fr 1fr']} gap={4}>
            <GridItem>
              <Box mb={4}>
                <Heading as="h3" size="md" mb={3}>
                  Sobre a série
                </Heading>
                <Text fontSize="md" mb={3}>
                  {serie.description}
                </Text>
              </Box>
              <Divider />
              <Box my={4}>
                <Heading as="h3" size="md" mb={3}>
                  O que você irá aprender
                </Heading>
                <List spacing={3}>
                  {serie.features?.map((feature) => (
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      {feature.name}
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Divider />
              <Box my={4}>
                <Heading as="h3" size="md" mb={3}>
                  Conteúdo
                </Heading>
                <Accordion defaultIndex={[0]} allowMultiple>
                  {serie?.seasons?.map((season) => (
                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          {season.name}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <List spacing={3}>
                          {season.episode.map((episode) => (
                            <ListItem>
                              <Flex
                                alignItems="center"
                                justifyContent="space-between"
                              >
                                <Flex
                                  alignItems="center"
                                  onClick={() =>
                                    handlePlayerClick(season, episode)
                                  }
                                >
                                  <ListIcon
                                    as={MdPlayCircleOutline}
                                    cursor="pointer"
                                  />
                                  <Text fontSize="sm" fontWeight="medium">
                                    <Link>{episode.name}</Link>
                                  </Text>
                                </Flex>
                                <Text fontSize="sm">{episode.videoTime}</Text>
                              </Flex>
                            </ListItem>
                          ))}
                        </List>
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Box>
            </GridItem>
            <GridItem>
              <Image
                src={serie.thumbUrl.url}
                alt={serie.name}
                layout="responsive"
                width={500}
                height={300}
              />
            </GridItem>
          </Grid>
          <Link href="/">
          <Button mt={10}>Voltar</Button>
        </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default withAuthModal(SerieViewContent);