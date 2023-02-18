"use client";
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,  
  Grid,
  Image
} from "@chakra-ui/react";
// import Image from "next/image";
import logo from "../../public/logor.png";
import Link from "next/link";
import { PhoneIcon, Search2Icon, EmailIcon } from '@chakra-ui/icons'

export default function Footer() {
  return (
    <>
      <Box bg={'#0c0c0c'}>
        <Container maxW={1300} >
          <SimpleGrid textAlign={{lg: 'left', md: 'left', base:'center'}} spacingX={'10px'} py={'30px'} templateColumns={{base:'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg:'repeat(4, 1fr)'}}>
            <Box>
              <Heading size={'lg'} pb={''} color={'white'}>About us</Heading>
              <Image margin={{base:'auto', lg:'0'}}  src={"/logor.png"} alt='Panaverse'></Image>
              <Text  pt={'0'} pr={{lg:'40px',base:'0'}} pb={'5'} color={'whiteAlpha.600'}>
              The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
              </Text>
            </Box>
            <Box>
              <Heading size={'lg'} color={'white'}>Useful Links</Heading>
              <Grid pt={'20px'} pb={'5'} color={'whiteAlpha.600'}>
              <Link href={'/'}>Home</Link>
              <Link href={'/'}>Syllabus</Link>
              <Link href={'/'}>Explore</Link>
              <Link href={'/'}>About</Link>
              <Link href={'/'}>Contact</Link>
              </Grid>
            </Box>
            <Box>
            <Heading size={'lg'} color={'white'}>Follow Us</Heading>
              <Grid pt={'20px'} pb={'5'} color={'whiteAlpha.600'}>
              <Link href={'/'}>Facebook</Link>
              <Link href={'/'}>Linkedin</Link>
              <Link href={'/'}>Twitter</Link>
              <Link href={'/'}>Youtube</Link>
              <Link href={'/'}>Github</Link>
              </Grid>
            </Box>
            <Box>
            <Heading size={'lg'} color={'white'}>Contact Us</Heading>
              <Grid pt={'20px'} pb={'5'} color={'whiteAlpha.600'}>
              <Link href={'/'}>
              <PhoneIcon pr={'1'} />
                +92 3167634620</Link>
              <Link href={'/'}>
              <EmailIcon pr={'1'} />
                rashidrasheed81@gmail.com</Link>
              <Link href={'/'}>
                <Search2Icon pr={'1'} />
                Kot Radha Kishen, Pakistan</Link>              
              </Grid>
            </Box>




                
          </SimpleGrid>
        </Container>
      </Box>
     
    </>
  );
}
