import React from 'react'
import {Flex,VStack,Heading} from '@chakra-ui/react'
import {useColorMode} from '@chakra-ui/react'
import {Link,IconButton,Spacer} from '@chakra-ui/react'
import {FaSun,FaMoon,FaFacebook,FaInstagram,FaGithub} from 'react-icons/fa'
import Social from '@/components/Social'
import Header from '@/components/Header'
import Profile from '@/components/Profile'
type Props = {}
const index = (props: Props) => {
  const {colorMode,toggleColorMode}=useColorMode() //use of hooks to toggle dark mode
  const isDark=colorMode=='dark';
  return (
    <>
    <VStack>
      <Flex w="100%" padding={'4'}>
        <Heading marginLeft='8' size="md" fontWeight={'semibold'} color='cyan.400'>
          NonceBlox
        </Heading>
        <Spacer></Spacer>
        <IconButton icon={isDark?<FaSun/>:<FaMoon/>}  marginLeft={'2'} size={'sm'} isRound='True' onClick={toggleColorMode}></IconButton>
        <Link href='https://google.com/' isExternal><IconButton icon={<FaFacebook/>} size={'sm'} isRound='True' marginLeft={'2'}></IconButton></Link>

      <Link href='https://github.com/' isExternal><IconButton icon={<FaGithub/>} size={'sm'} isRound='True' marginLeft={'2'}></IconButton></Link>
      <Link href='https://instagram.com/' isExternal><IconButton icon={<FaInstagram/>} size={'sm'} isRound='True' marginLeft={'2'}></IconButton></Link>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
    </>
  )}
  export default index;