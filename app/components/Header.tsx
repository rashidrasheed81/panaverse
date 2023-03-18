'use client';
import { Box, Container, SimpleGrid, Flex, Button, Menu, MenuButton, MenuIcon, MenuItem, MenuList, IconButton, Text  } from '@chakra-ui/react'
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
                        <Link href={'https://portal.piaic.org'} target="_blank">
                        <Button mt='10px' size='lg' colorScheme='teal' float='right'>Apply</Button>
                        </Link>
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
                                <Link href='/' ><Text fontSize={'md'} as='b'>Home</Text></Link>
                                </MenuItem>
                                <MenuItem>
                                <Link href='/syllabus'><Text fontSize={'md'} as='b'>Syllabus</Text></Link>
                                </MenuItem>
                                <MenuItem>
                                <Link href='/explore'><Text fontSize={'md'} as='b'>Explore</Text></Link>
                                </MenuItem>
                                <MenuItem>
                                <Link href='/about'><Text fontSize={'md'} as='b'>About</Text></Link>
                                </MenuItem>
                                <MenuItem>
                                <Link href='/contact'><Text fontSize={'md'} as='b'>Contact</Text></Link>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>




                </SimpleGrid>
            </Container>
        </Box>    
  )
}
