import React, { useEffect } from 'react'
import {Text,Button,Stack,SimpleGrid,Card,CardFooter,CardHeader,CardBody,Input,Heading} from '@chakra-ui/react'
import Component from './Navbar2'
const Homes = (props) => {
  useEffect(() => {
    if(window?.ethereum) {
      console.log("Ethereum");
    }
    }, []);

  return (
    <>
        <SimpleGrid m={'5'} spacing={12} padding={'10'} h={'fit-content'}  templateColumns={'repeat(auto-fill,minmax(400px,1fr))'}>
            <Card>
              <CardHeader>
                <Heading>Wallet Address</Heading>
              </CardHeader>
              <CardBody>
                <Input placeholder='Wallet Address details' value={props.add} disabled></Input>
              </CardBody>
             
            </Card>
            <Card>
              <CardHeader>
                <Heading>Wallet Balance </Heading>
              </CardHeader>
              <CardBody>
                <Input placeholder='Wallet Balance' value={props.bal} disabled></Input>
              </CardBody>
            </Card>
           
        </SimpleGrid>
    </>
  )
}

export default Homes