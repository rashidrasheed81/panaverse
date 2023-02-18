import { Box, Container,Flex, Heading, Text, Button,Image  } from '@chakra-ui/react'
import React from 'react'
import logo2 from '../../public/logo2.webp'
import bg4 from '../../public/bg4.png'
// import Image from 'next/image'

export default function Banner() {
  return (
    <>
    <Box bgSize={'cover'} bgImage='bg4.png'>
        <Container maxW={1400}>
            <Flex pt={{lg:'150px', base:'30px'}} pb={'100px'} px={{lg:'40px', base: '5px'}} display={{lg:'flex', base:'grid'}}>
                <Box flexBasis={'50%'} px={'30px'}>
                    <Heading textColor={'black'} size={{lg:'2xl', base:'md',md:'xl'}}>Prepare yourself for the Next Generation of Internet with Panaverse.</Heading>
                    <Text color={'blackAlpha.800'} pt={'10px'} >
                        One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI). Cloud, Edge, and Ambient Computing/IoT Technologies
                    </Text>
                    <Button mt={'10px'} size={'lg'} colorScheme={'teal'}>More Info</Button>
                </Box>
                <Box mt={{lg:'-75px', md: '-35' , base:'5'}} flexBasis={{lg:'50%', base:'60%'}}>
                    <Image src='/logo2.webp' alt={'firstpagelogo'} width={{lg:'700',md:'400' ,base:'400'}} height={{lg:'500', md: '400', base:'300'}}></Image>
                   
                </Box>
            </Flex>

        </Container>
    </Box>
    <Box>
        <Container maxW={1400}>
            <Flex gap={{lg:'100px', base:'10px'}} display={{lg:'flex', base:'grid'}}>
            <Box flexBasis={'50%'}>
                <Image src='/logo4.webp' alt={'firstpagelogo'} width={{lg:'400',md:'250',base:'200'}} height={{lg:'400',md:'300' ,base:'250'}}></Image>
            </Box>
            <Box flexBasis={'50%'} pt={{lg:'80px', base:'5px'}} px={{lg:'0', base:'5px'}}>
                <Heading pl={'15px'} pt={'10px'} size={'xl'}>Program Of Studies</Heading>
                <Text pl={'15px'} pr={'100px'} pt={'10px'}>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
                <Button ml={'15px'} mt={'10px'} size='lg' colorScheme={'teal'}>Read More</Button>
            </Box>
            </Flex>

        </Container>
    </Box>

    <Box>
        <Container maxW={1400}>
            <Flex gap={{lg:'100px', base:'10px'}} display={{lg:'flex', base:'grid'}}>
            <Box pl={{lg:'60px', base:'5px'}} flexBasis={'50%'} pt={{lg:'80px', base:'30px'}} px={{lg:'0', base:'5px'}}>
                <Heading pl={'15px'} pt={'20px'} size={'xl'}>What Is Panaverse DAO</Heading>
                <Text pl={'15px'} pr={'100px'} pt={'10px'}>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet.</Text>
                <Button ml={'15px'} mt={'10px'} size='lg' colorScheme={'teal'}>Read More</Button>
            </Box>
            <Box flexBasis={'50%'}>
                <Image src='/logo3.webp' alt={'firstpagelogo'} mb={'50px'} width={{lg:'400',md:'250', base:'200'}} height={{lg:'350',md:'300', base:'250'}}></Image>
            </Box>
            
            </Flex>

        </Container>
    </Box>


    </>
  )
}
