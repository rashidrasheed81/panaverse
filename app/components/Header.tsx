'use client';
import { Box, Container, SimpleGrid, Flex, Button, Menu, MenuButton, MenuIcon, MenuItem, MenuList, IconButton  } from '@chakra-ui/react'
import Image from 'next/image';
import logo from '../../public/logor.png'
import Link from 'next/link';
import { HamburgerIcon } from '@chakra-ui/icons'

export default function Header() {
  return (    
    <Box boxShadow='lg' bgGradient="white">
            <Container maxW={1400} maxHeight={'80px'}>
                <SimpleGrid templateColumns={{ lg: 'repeat(3, 1fr)', base: 'repeat(2, 1fr)' }}>
                    <Box pt={'-40'} paddingBottom={'10'} boxSize={'140px'}>
                        <Image width={'250'} height={'250'} src={logo} alt='panaverse-logo' ></Image>
                    </Box>
                    <Flex display={{lg:'flex', base:'none'}} pt={'8'} h={'50'} placeItems='center' color='black' fontSize={18} fontWeight='semibold' gap={10}>
                        <Link href='/'>Home</Link>
                        <Link href='/syllabus'>Syllabus</Link>
                        <Link href='/explore'>Explore</Link>
                        <Link href='/about'>About</Link>
                        <Link href='/contact'>Contact</Link>
                        
                    </Flex>
                    <Box display={{lg:'initial', base:'none'}} pt={'1'}>
                        <Button mt='10px' size='lg' colorScheme='teal' float='right'>Apply</Button>
                    </Box>

                    <Box pt='20px' display={{ lg: 'none', base: 'initial' }}>
                        <Menu  >
                            <MenuButton float='right'
                                as={IconButton}
                                aria-label='Options'
                                icon={<HamburgerIcon />}
                                variant='outline'
                            />
                            <MenuList>
                                <MenuItem>
                                    Home
                                </MenuItem>
                                <MenuItem>
                                    Syllabus
                                </MenuItem>
                                <MenuItem>
                                    Explore
                                </MenuItem>
                                <MenuItem>
                                    About
                                </MenuItem>
                                <MenuItem>
                                    Contact
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>




                </SimpleGrid>
            </Container>
        </Box>    
  )
}
