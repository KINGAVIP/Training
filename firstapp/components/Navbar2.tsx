import React, { useState } from 'react'
import { ReactNode } from 'react'
import {ethers} from "ethers";
import {Button,useDisclosure,useColorMode,Link,Flex,
    MenuItem,MenuList,Icon,Avatar,HStack,Box,Input, Spacer,IconButton,Menu,MenuButton,useColorModeValue,Text, border} from  '@chakra-ui/react'
import {FaSun,FaMoon} from 'react-icons/fa'
import {LuStar} from 'react-icons/lu'
import { ChevronUpIcon } from '@chakra-ui/icons'
import {FiSun} from 'react-icons/fi'
import {FiMoon} from 'react-icons/fi'
import {GiBarbedStar} from 'react-icons/gi'
import {ChevronDownIcon} from '@chakra-ui/icons'
import Homes from './Homes';
const Links=['Create','Coins','Activity']
const NavLink=({children}:{children:ReactNode})=>(
    <Link
        px={2.5}
        py={2}
        rounded='md'
        border={'1px solid transparent'}
        _hover={{
            textDecoration:'none',
            border:'1px solid yellow'
            // bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'/'+children?.toString()}> 
        {children}
    </Link>
);
const Navbar2 = () => {
    const {colorMode,toggleColorMode}=useColorMode()
    const isdark=colorMode=='dark';
    const dropdown1=useDisclosure()
    const dropdown2=useDisclosure()
    const dropdown3=useDisclosure()
    const [data,setdata]=useState({address:"",
    Balance:"",});
    const connectWallet = async  () => {
            const walletData = await window.ethereum.request({method: 'eth_requestAccounts'});
            const walletBalanceData = await window.ethereum.request({method: 'eth_getBalance',params:[walletData[0],'latest']});
            setdata({
                address:walletData[0],
                Balance:ethers.formatEther(walletBalanceData)
            })
            console.log("The address is:",walletData[0])
            console.log("The amount is:",walletBalanceData)
        //    console.log(walletData);
           }

        

  return (
    <>

    <Flex alignItems='center' justifyContent={'center'} h='14' p='2'  bg={isdark?'gray.900':'white'} color={isdark?'white':'black'}>
        <Flex >
            <Link href='/logo'>
            <Menu >
                <MenuButton rounded={'full'}>     
                    <Avatar
                        size='sm'
                        mx={'2'}
                        src={'https://nftx.io/images/logo_on_black.svg'}
                    ></Avatar>   
                </MenuButton>        
            </Menu>
            </Link>
            <Box>
            <Input placeholder='Search for Vaults' w='sm'  _focus={{border:'1px solid red'}} _hover={{border:'1px solid red'}}/>
            </Box>
        </Flex>
        <Spacer></Spacer>
        <HStack>
            as={'nav'}
            spacing={6}
            {/* display={{base:'none',md:'flex'}}> */}
            <Menu isOpen={dropdown1.isOpen}>
            <MenuButton
                // variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={2}
                h={'14'} 
             
                _hover={{bg:'transparent'}}
                
                borderRadius={2}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={dropdown1.onOpen}
                onMouseLeave={dropdown1.onClose}
            >
                Shop {dropdown1.isOpen  ?<ChevronUpIcon fontSize={'2xl'}/>:<ChevronDownIcon fontSize={'2xl'}/>}
            </MenuButton>
            <MenuList  pos={'absolute'} top={'-2'} border={'1px solid gray'}  minW={'0px'}  onMouseEnter={dropdown1.onOpen} onMouseLeave={dropdown1.onClose}>
                <MenuItem  paddingRight={'50px'}>Buy</MenuItem>
                <MenuItem paddingRight={'50px'}>Sell</MenuItem>
                <MenuItem paddingRight={'50px'}>Swap</MenuItem>
            </MenuList>
        </Menu>
        <Menu isOpen={dropdown2.isOpen}>
            <MenuButton
                 py={[1, 2, 2]}
                 px={2}
                h={'14'} 
                borderRadius={2}
                aria-label='sekect'
                _hover={{bg:'transparent'}}
                onMouseEnter={dropdown2.onOpen}
                onMouseLeave={dropdown2.onClose}>
                    Rewards{dropdown2.isOpen?<ChevronUpIcon fontSize={'2xl'}/>:<ChevronDownIcon fontSize={'2xl'}/>}
            </MenuButton>
            <MenuList minW={'0px'}  marginTop={0} border={'1px solid gray'} 
            pos={'absolute'} top={'-2'} onMouseEnter={dropdown2.onOpen} 
            onMouseLeave={dropdown2.onClose}>
                <MenuItem paddingRight={'50px'}>DashBoard</MenuItem>
                <MenuItem paddingRight={'50px'}>Pools</MenuItem>
            </MenuList>
        </Menu>
            
            {Links.map((link)=>(
                <NavLink key={link}>{link}</NavLink>
            ))}
            <Link href='/yield'> 
            <Button 
                color={'gray'}
            rightIcon={<GiBarbedStar/>}        
                bg={'transparent'} border={'1px solid transparent'}  _hover={{bg:'transparent' ,border:'1px solid gray'}}>
                Yield
            </Button>
            </Link>
            <IconButton mx={'2'} size='lg' icon={isdark?<FiSun/>:<FiMoon/>} isRound='True' size='md' bg={'transparent'}  onClick={toggleColorMode}
            _hover={{ background:'transparent',
            }}></IconButton>
             <Menu isOpen={dropdown3.isOpen}>
                <MenuButton 
                    // bg={'red.500'}
                    onClick={dropdown3.onToggle}
                    h= '14'
                >     
                    <Avatar
                        size='sm'
                        p={'2'}
                        objectFit={'contain'}
                        rounded={'md'}
                        border={'2px solid red'}
                        color={'red.400'}
                        src={'https://nftx.io/images/ethereum-nftx.svg'}
                    ></Avatar>   
                </MenuButton>     
                <MenuList borderColor={'red'} minW={'0'} onMouseEnter={dropdown3.onOpen} onMouseLeave={dropdown3.onClose}>
                    <MenuItem  paddingRight={'60px'}> <Avatar
                    size={'sm'}
                    p='2'
                    src={'https://nftx.io/images/ethereum-nftx.svg'}>
                        </Avatar> Ethernum</MenuItem>    
                    <MenuItem paddingRight={'60px'}> <Avatar
                    size={'sm'}
                    p='2'
                    src={'https://nftx.io/images/arbitrum.svg'}>
                        </Avatar> Arbitrum</MenuItem>    
                        <MenuItem  paddingRight={'60px'}> <Avatar
                    size={'sm'}
                    p='2'
                    src={'https://nftx.io/images/ethereum-nftx.svg'}>
                        </Avatar> Goerli</MenuItem>    
                  
                </MenuList>  
            </Menu>
            
            <Button
                onClick={connectWallet}
                _hover={{bg:'red.200'}}
                bg={'red.300'}
                >

                   Connect  
            </Button>
         
        </HStack>
    </Flex>
    <Homes add={data.address} bal={data.Balance}></Homes>

    </>
  )
}

export default Navbar2