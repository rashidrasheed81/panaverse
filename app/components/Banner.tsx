import { Box, Container,Flex, Heading, Text, Button,Image  } from '@chakra-ui/react'
import React from 'react'
import logo2 from '../../public/logo2.webp'
import bg4 from '../../public/bg4.png'
import {RevealWrapper} from 'next-reveal'
import Link from 'next/link'
// import Image from 'next/image'

export default function Banner() {
  return (
    <>
    <Box bgSize={'cover'} bgImage='bg4.png'>
        <RevealWrapper origin='left' delay={200} duration={1500} distance='500px' reset={true}>
        <Container maxW={1400}>
            <Flex pt={{lg:'150px', base:'40px'}} pb={'100px'} px={{lg:'40px', base: '5px'}} display={{lg:'flex', base:'grid'}}>
                <Box flexBasis={'50%'} px={'30px'}>
                    <Heading textColor={{md:'black', base:'white'}} size={{lg:'2xl', base:'xl',md:'2xl'}} mb={'10px'}>Prepare yourself for the Next Generation of Internet with Panaverse.</Heading>
                    <Text color={{lg:'blackAlpha.900', base:'gray.500'}} fontSize='lg' as='b' mb='10px'>
                        One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI). Cloud, Edge, and Ambient Computing/IoT Technologies
                    </Text>
                    <Link href='/syllabus'>
                    <Button  my={{md:'30px', base:'40px'}} size={'lg'} colorScheme={'teal'}>More Info</Button>
                    </Link>
                </Box>
                <Box mt={{lg:'-75px', md: '-35' , base:'5'}} flexBasis={{lg:'50%', base:'60%'}}>
                    <Image src='/logo2.webp' alt={'firstpagelogo'} width={{lg:'700',md:'400' ,base:'400'}} height={{lg:'500', md: '400', base:'300'}} ></Image>
                   
                </Box>
            </Flex>

        </Container>
        </RevealWrapper>
    </Box>
    <Box>
        <Container maxW={1400}>
            <Flex gap={{lg:'100px', base:'10px'}} display={{lg:'flex', base:'grid'}}>
            <Box flexBasis={'50%'}>
            <RevealWrapper origin='left' delay={200} duration={300} distance='300px' reset={true}>

                <Image src='/logo4.webp' alt={'firstpagelogo'} width={{lg:'400',md:'250',base:'200'}} height={{lg:'400',md:'300' ,base:'250'}} mt='10' ></Image>
                </RevealWrapper>

            </Box>


            <Box flexBasis={'50%'} pt={{lg:'80px', base:'5px'}} px={{lg:'0', base:'5px'}}>
            <RevealWrapper origin='right' delay={200} duration={300} distance='300px' reset={true}>

                <Heading pl={'15px'} pt={'10px'} size={'xl'}>Program Of Studies</Heading>
                <Text pl={'15px'} pr={{md:'100px', base:'15px'}} pt={'10px'}>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
                <Button ml={'15px'} mt={'10px'} size='lg' colorScheme={'teal'}>Read More</Button>
                </RevealWrapper>

            </Box>

            </Flex>

        </Container>
    </Box>

    <Box>
        <Container maxW={1400}>
            <Flex gap={{lg:'100px', base:'10px'}} display={{lg:'flex', base:'grid'}}>
            <Box pl={{lg:'60px', base:'5px'}} flexBasis={'50%'} pt={{lg:'80px', base:'30px'}} px={{lg:'0', base:'5px'}}>
            
            <RevealWrapper origin='left' delay={200} duration={300} distance='500px' reset={true}>
                <Heading pl={'15px'} pt={'20px'} size={'xl'}>What Is Panaverse DAO</Heading>
                <Text pl={'15px'} pr={{md:'100px', base:'15px'}} pt={'10px'}>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet.</Text>
                <Button ml={'15px'} mt={'10px'} size='lg' colorScheme={'teal'}>Read More</Button>
                </RevealWrapper>
            </Box>

            <Box flexBasis={'50%'}>
            <RevealWrapper origin='right' delay={200} duration={300} distance='300px' reset={true}>
                <Image src='/logo3.webp' alt={'firstpagelogo'} mb={'50px'} width={{lg:'400',md:'250', base:'200'}} height={{lg:'350',md:'300', base:'250'}} mt='7'></Image>
                </RevealWrapper>

            </Box>
            
            </Flex>

        </Container>
    </Box>


    </>
  )
}
