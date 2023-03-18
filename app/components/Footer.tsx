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
              <Link href='/'>Home</Link>
              <Link href='/syllabus'>Syllabus</Link>
              <Link href='/explore'>Explore</Link>
              <Link href='/about'>About</Link>
              <Link href='/contact'>Contact</Link>
              </Grid>
            </Box>
            <Box>
            <Heading size={'lg'} color={'white'}>Follow Us</Heading>
              <Grid pt={'20px'} pb={'5'} color={'whiteAlpha.600'}>
              <Link href='https://www.facebook.com/groups/panaverse/' target='_blank'>Facebook</Link>
              <Link href='https://www.linkedin.com/company/panaverse/?originalSubdomain=pk' target='_blank'>Linkedin</Link>
              <Link href='https://twitter.com/Panaverse_edu' target='_blank'>Twitter</Link>
              <Link href='https://www.youtube.com/@panaverse' target='_blank'>Youtube</Link>
              <Link href='https://github.com/panaverse' target='_blank'>Github</Link>
              </Grid>
            </Box>
            <Box>
            <Heading size={'lg'} color={'white'}>Contact Us</Heading>
              <Grid pt={'20px'} pb={'5'} color={'whiteAlpha.600'}>
              <Link href={'tel:00923167634620'} target='_blank'>
              <PhoneIcon pr={'1'} />
                +92 3167634620</Link>
              <Link href={'mailto:rashidrasheed81@gmail.com'} target='_blank'>
              <EmailIcon pr={'1'} />
                rashidrasheed81@gmail.com</Link>
              <Link href={"https://goo.gl/maps/RdFJnziwQLvysNp36"} target='_blank'>
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
