import React from 'react'
import {StatGroup, Stat,Box, StatLabel,StatArrow,StatNumber,StatHelpText} from '@chakra-ui/react'
type Props = {}

const Details = (props: Props) => {
  return (
    <>
    <Box display='flex' justifyContent='center' alignItems='center'>
    <StatGroup  >
    <h1 className='my-auto font-bold text-3xl'>Balance Details</h1>
  <Stat paddingX='2rem' >
    <StatLabel>Crypto</StatLabel>
    <StatNumber>345,670</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat>

  <Stat  className='px-4'>
    <StatLabel>Bitcoins</StatLabel>
    <StatNumber>200</StatNumber>
   
  </Stat>
</StatGroup>
</Box>
  </>
  )}
export default Details