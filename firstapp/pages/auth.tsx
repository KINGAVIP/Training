import React from 'react'
import  {useColorMode, useColorModeValue} from '@chakra-ui/react'
import {Flex,Stack,Heading,Text,Box,HStack,FormControl,FormLabel,Input ,Button,Checkbox,Link} from '@chakra-ui/react'
const auth = () => {
  return (
    <>
        <Flex minH={'80vh'} justify={'center'} align={'center'} >
            <Stack mx={'auto'} maxW={'lg'} px='12' py='12' spacing={8} borderRadius={'20px'}  border={'1px solid gray.400'}
            bg={useColorModeValue('gray.100','gray.900')}
            >
                <Stack align={'center'}>
                <Heading>
                    Login
                </Heading>
            
                </Stack>
                <Box>
                    <Stack spacing={4}>
                        <FormControl id='username'>
                            <FormLabel>Username:</FormLabel>
                            <Input type='text' placeholder='enter username'></Input>
                        </FormControl>
                        <FormControl id='password'>
                            <FormLabel>Wallet Address:</FormLabel>
                            <Input type='password' placeholder='enter wallet address'></Input>
                        </FormControl>
                    <HStack spacing={10}>
                        <Checkbox>Remember Me</Checkbox>
                        <Link color={'blue.400'}>Forgot Password?</Link>
                    </HStack>
                    <Button w={'100%'}>
                        Sign In
                    </Button>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    </>
  )
}

export default auth