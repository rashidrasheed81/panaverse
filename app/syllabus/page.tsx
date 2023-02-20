'use client';
import { Box, Container, Flex, Image,Heading,Text, Center } from '@chakra-ui/react';
import React from 'react'
import Home from '../components/Home'


export default function Syllabus() {
  return (
    <>
    <Home title='Syllabus' src={'books.jpg'}/>
    <Box>
      <Container maxW={1400}>
        <Flex>
          <Box>
            <Center>
          <Heading pt={'50'}>Course Syllabus</Heading>
          </Center>
          <Center>
          <Text pt={'5'} px={'160px'} >
          The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack
          Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into
          </Text>          
          </Center>
          
          <Center>
          <Text>five quarters of 13 weeks each</Text>          
          </Center>
          <Center>
          <Heading pt={'40px'} pb={'10px'}>Common in All</Heading>
          </Center>
          <Center><Text pb={'20px'}>Every participant of the program will start by completing the following three core courses:
</Text>
          </Center>      
          </Box>
        </Flex>
      </Container>
    </Box>
    
    </>
  )
}
