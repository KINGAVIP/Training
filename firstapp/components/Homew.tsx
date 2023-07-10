
import { Box, Heading, Text,Card, CardBody,Image,Stack,Button,Divider,CardFooter,ButtonGroup } from '@chakra-ui/react';

const Homew = () => {
  
  return (
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  justifyContent='center'
  padding='5'
>
  <Image
    objectFit='contain'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://www.nonceblox.com/logos.png'
    alt='Caffe Latte'
  />

  <Stack p='4'>
    <Button variant='solid' colorScheme='blue' p='10' color='yellow.300' backgroundImage='https://www.nonceblox.com/logos.png'
     objectFit='contain'>
        Connect To Wallet
      </Button>
    

      <Button variant='solid' colorScheme='blue' p='10'>
        Using Chakrata UI
      </Button>
  </Stack>
</Card>
  );
};

export default Homew;