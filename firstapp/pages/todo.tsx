import React from 'react'
import {Stack,Flex,HStack,Button,Link,Heading,Text,Input,Box,Card,CardHeader,CardFooter,CardBody} from '@chakra-ui/react'
import {GoPencil} from 'react-icons/go'
import {AiFillDelete} from 'react-icons/ai'
import {IoIosAddCircleOutline} from 'react-icons/io'
const todo = () => {
  return (
    <>
    <Flex justify={'center'} align={'center'} minH={'80vh'}>
    <Stack spacing={6} px={'12'} py={'12'}>
        <Heading  textAlign={'center'}>To Do App </Heading>
        <HStack>
            <Input placeholder='Search Note here'></Input>
            <HStack>
                <Button bg={'blue.400'} rightIcon={<IoIosAddCircleOutline/>}>Add</Button>
                <Button bg='red.600' rightIcon={<AiFillDelete/>}>Delete</Button>
            </HStack>
        </HStack>
        <Stack spacing={'3'}>
        <Card >
            <CardHeader textAlign={'center'} fontSize={'lg'} fontStyle={'bold'} fontWeight={'800'} my='0'>
                My first Note
            </CardHeader>
            <CardBody  py='0'>
                <Text fontStyle={'italic'}>Sumary.............</Text>
                <Text>Status:Completed</Text>
                <Text>Date:10/07/2023</Text>
            </CardBody>
            <CardFooter>
                <HStack justify='center' mx='auto' my='auto'>
                <Button>Read</Button>
                <Button rightIcon={<GoPencil/>}>Edit</Button>
                </HStack>
            </CardFooter>
        </Card>
        <Card >
            <CardHeader textAlign={'center'} fontSize={'lg'} fontStyle={'bold'} fontWeight={'800'} my='0'>
                My Second Note
            </CardHeader>
            <CardBody  py='0'>
                <Text fontStyle={'italic'}>Sumary.............</Text>
                <Text>Status:Completed</Text>
                <Text>Date:09/07/2023</Text>
            </CardBody>
            <CardFooter>
                <HStack justify='center' mx='auto' my='auto'>
                <Button>Read</Button>
                <Button  rightIcon={<GoPencil/>}>Edit</Button>
                </HStack>
            </CardFooter>
        </Card>
        </Stack>

    </Stack>
    </Flex>
    </>
  )
}

export default todo