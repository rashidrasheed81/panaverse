import {Box, Center, Container, Flex, Heading, Image, SimpleGrid, Text,
} from "@chakra-ui/react";
import React from "react";
import {data} from '../components/database'

export default function Instructors() {
  return (
    
    <Box>
      <Container maxW={1400}>
        <Center>
          <Heading>Our Instructors</Heading>
        </Center>
        <Flex flexDir={'row'} >

            {data.map((ins)=> (
          <Box key={ins.id}>
            <Center>
              <Image m='10px' borderRadius={"full"} width={"90"} height={"90"} src={ins.src} alt='founders' />
            </Center>
           
              <Heading pb='10px' textAlign='center' size='md'>{ins.heading} </Heading>
              <Text pb='30px' px='40px' fontSize='sm' textAlign='center'>
                Panaverse DAO is a community of Web 3 and Metaverse developers,
                designers, trainers, startup founders
              </Text>            
          </Box>
          ))}

        </Flex>
      </Container>
    </Box>
    
  );
}
