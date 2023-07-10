import React from 'react'
import {Flex} from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'
type Props = {}

const Footer = (props: Props) => {
  const {colorMode,toggleColorMode}=useColorMode()
  const isdark=colorMode=='dark'
  return (
    <>
    <Flex justifyContent={'center'} alignItems='center' pos={'fixed'} bottom={'0'} bg={isdark?'gray.900':'white'} h={'14'} w={'100vw'} >
        Footer&copy;NonceBlox
    </Flex>
    </>
  )
}
export default Footer