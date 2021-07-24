import Layout from 'src/components/Layout';
import { Text, Flex, Button } from '@chakra-ui/react';
import Link from 'next/link';

function Privacy() {
  return (
    <Layout>
      <Flex justify="center" alignItems="center" direction="column">
        <Flex w="full" maxW="1200px" px={[4, 8]} mt={10} direction="column">
          <Text fontSize={{ base: '16px', md: '20px', lg: '22px' }}>
            MIT License Copyright (c) 2020 Lucas Nhimi Permission is hereby
            granted, free of charge, to any person obtaining a copy of this
            software and associated documentation files (the "Software"), to
            deal in the Software without restriction, including without
            limitation the rights to use, copy, modify, merge, publish,
            distribute, sublicense, and/or sell copies of the Software, and to
            permit persons to whom the Software is furnished to do so, subject
            to the following conditions: The above copyright notice and this
            permission notice shall be included in all copies or substantial
            portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT
            WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
            TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
            COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
            ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
            OR OTHER DEALINGS IN THE SOFTWARE
          </Text>
        </Flex>
        <Link href="/">
          <Button mt={10}>Voltar</Button>
        </Link>
      </Flex>
    </Layout>
  );
}

export default Privacy;