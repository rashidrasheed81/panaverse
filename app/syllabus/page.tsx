'use client';
import { Box, Container, Flex, Image,Heading,Text, Center } from '@chakra-ui/react';
import Home from '../components/Home'
import { cards } from '../components/database'
import {RevealWrapper} from 'next-reveal'



export default function Syllabus() {
  return (
    <>
    
    <Home title='Syllabus' src={'books.jpg'} />
    <Box pt='5'>
      <Container maxW={1400}>
            <Center flexDir={'column'}>
          <Heading pt={'50'}>Course Syllabus</Heading>
          <Text textAlign={'center'} pt={'5'} px={{base:'20px' ,md:'140px', lg:'160px'}}>
          The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack
          Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each
          </Text>
          </Center>     


           <Center flexDir={'column'} >
          <Heading pt={'30'}>Common in All</Heading>
          <Text textAlign={'center'} py={'5'} px={{base:'20px' ,md:'140px', lg:'160px'}} >
          Every participant of the program will start by completing the following three core courses:
          </Text>
          </Center> 

            <Center>
            <RevealWrapper origin='top' delay={300} duration={500} distance='250px' reset={true}>
              
          <Flex mt={'30px'} gap={'25px'} flexDirection={{base: 'column', md:'row'}} px={{base:'50px',lg:''}}>
            <Box textAlign={'center'} p='30px' boxShadow={'dark-lg'} borderRadius={'20px'} width={'270px'} height={'230px'}>
            <Heading >Quarter I</Heading>
              <Text pt='5px'>CS-101: Object-Oriented Programming using TypeScript and Typescript for React</Text>
            </Box>
            <Box textAlign={'center'} p='30px' boxShadow={'dark-lg'} borderRadius={'20px'} width={'270px'} height={'270px'}>
            <Heading>Quarter II</Heading>
              <Text pt='5px'>W2-201: Developing Planet-Scale Web 2.0 Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</Text>
            </Box>
            <Box textAlign={'center'} p='30px' boxShadow={'dark-lg'} borderRadius={'20px'} width={'270px'} height={'230px'}>
              <Heading>Quarter III</Heading>
              <Text pt='5px'>$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</Text>
            </Box>
            </Flex>    
            </RevealWrapper>
            </Center>
          
            <Center flexDir={'column'} >
          <Heading pt={'50'}>Specialized Tracks</Heading>
          <Text textAlign={'center'} pt={'5'} px={{base:'25px' ,md:'140px', lg:'160px'}} mb='50px' >
          After completing the first two quarters the participants will select one or more specializations consisting of two courses each:
          </Text>
          </Center> 

      </Container>

<Container maxW={1400} bgSize='cover' bgAttachment={'fixed'} bgImage='bgcolor.webp'>

{cards.map((elem)=>(
  <Box key={elem.id} pt='10px' pb='50px' >

<RevealWrapper origin='top' delay={300} duration={500} distance='250px' reset={true}>
<Center flexDir={'column'} mt='50px'>
          <Heading pl={{base:'20px', md:'', lg:''}}>{elem.heading1}</Heading>
          <Text fontWeight={'medium'} color='white' textAlign={'center'} pt={'5'} px={{base: '30px', md: '130px', lg:'160px'}} >{elem.text1}</Text>
          </Center>     
          </RevealWrapper>

<Center>
          <Flex mt={'30px'} gap={'25px'} flexDirection={{base: 'column', md:'row'}} >
          <RevealWrapper origin='left' delay={600} duration={300} distance='50px' reset={true}>
          <Center>              
            <Box bg={'white'} textAlign={'center'} p='50px' boxShadow={'dark-lg'} borderRadius={'20px'} width={{base:'250px', md:'350px'}}>
            <Heading >{elem.heading2}</Heading>
              <Text fontWeight={'medium'} pt='5px'>{elem.text2}</Text>
            </Box>
            </Center>
            </RevealWrapper>


            <RevealWrapper origin='right' delay={600} duration={300} distance='50px' reset={true}>
          <Center>              

            <Box bg={'white'} textAlign={'center'} p='50px' boxShadow={'dark-lg'} borderRadius={'20px'} width={{base:'250px', md:'350px'}}>
            <Heading>{elem.heading3}</Heading>
              <Text fontWeight={'medium'} pt='5px'>{elem.text3}</Text>
            </Box>          
            </Center>
            </RevealWrapper>
            </Flex>    
            </Center>          
            </Box>

))}
</Container>
    </Box>
    
    </>
  )
}
