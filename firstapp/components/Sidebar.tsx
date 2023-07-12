import React from 'react'
import { Link, Flex, Box, HStack, Drawer, useColorModeValue, Text, Stack, Heading, Card, Spacer, Icon, Button } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { BiLogoBitcoin } from 'react-icons/bi'
// import Link from 'next/link'
const Sidebar = () => {
    interface LinkItemsProps1 {
        name: string,
        value: number
    }
    const LinkItems1: Array<LinkItemsProps1> = [
        { name: 'JANK', value: 47 },
        { name: 'SAUDIS', value: 33 },
        { name: 'BABBY', value: 21 },
        { name: 'DUCK', value: 87 },
        { name: 'SPORTO', value: 35 },
    ]
    interface LinkItemsProps2 {
        name: string,
        value: string
    }
    const LinkItems2: Array<LinkItemsProps2> = [
        { name: 'readact #3244', value: 'sell' },
        { name: 'ELITE #119', value: 'buy' },
        { name: 'ELITE #116', value: 'buy' },
        { name: 'AVASTAR #25101', value: 'buy' },
        { name: 'AVASTAR #25010', value: 'buy' },
    ]
    interface LinkItemsProps3 {
        name: string,
        value: number,
        icon: IconType
    }
    const LinkItems3: Array<LinkItemsProps3> = [
        { name: 'PUDGY', value: 2124.75, icon: BiLogoBitcoin },
        { name: 'RPC', value: 2124.75, icon: BiLogoBitcoin },
        { name: 'ELITE', value: 2124.75, icon: BiLogoBitcoin },
        { name: 'AVASTAR', value: 2124.75, icon: BiLogoBitcoin },
        { name: 'AVASTAR', value: 2124.75, icon: BiLogoBitcoin },
    ]
    function generatecolor() {
        let color = '#';
        var str = '0123456789ABCDEF'
        for (var i = 0; i < 6; i++) {
            let num = Math.floor(Math.random() * 15)
            color += str[num]
        }
        return color
    }
    const NavItem = ({ value, children, ...rest }: NavItemProps) => {
        return (
            <Link href='#' textDecoration={'none'} _hover={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }} >
                <Flex background={'gray.900'} borderRadius={'lg'}>
                    <HStack padding={'2'}>
                        <Text fontWeight={'600'} color={generatecolor}>
                            {children}
                        </Text>
                        <Spacer></Spacer>
                        <Text pos={'absolute'} right={'55'}>{value}%</Text>
                    </HStack>
                </Flex>
            </Link>
        )
    }
    const ActivityItem = ({ value, children, ...rest }: ActivityItemProps) => {
        return (
            <Flex padding={'1.4'} margin={'0'}>
                <HStack spacing={'8'} >
                    <Text>{children}</Text>
                    <Button position={'absolute'} right={'55'} padding={'0'} w={'fit-content'} h={'fit-content'} _hover={{ background: 'transparent' }}>{value}</Button>
                </HStack>
            </Flex>
        )
    }
    const APRItem = ({ icon, value, children, ...rest }: APRItemProps) => {
        return (
            <Flex padding={'1.4'} margin={'0'}>
                <HStack spacing={'8'} >    
                <Button leftIcon={<BiLogoBitcoin />} position={'absolute'} right={'55'} padding={'0'} w={'fit-content'} h={'fit-content'} _hover={{ background: 'transparent' }}>{children}</Button>

                    <Text>{value}</Text>

                </HStack>
            </Flex>
        )
    }

    return (
        <>
            <Flex left={'0'} marginRight={'10px'} pos={'sticky'} display={'inline-block'}
                padding={'7'} justify={'center'} align={'center'} bg={useColorModeValue('gray.100', 'gray.900')}>
                <Stack spacing={'7'} minH={'100vh'}>
                    <Box padding={'5'} background={'gray.800'} borderRadius={'lg'}>
                        <Stack spacing={'1'} >
                            <HStack spacing={'8'} marginBottom={'2'}>
                                <Heading size={'sm'} color={'gray.400'}>
                                    TRENDING
                                </Heading>
                                <Text>(7D TurnOver)</Text>
                            </HStack>
                            {LinkItems1.map((link) => (
                                <NavItem key={link.name} value={link.value}>{link.name}</NavItem>
                            ))}
                        </Stack>
                    </Box>
                    <Box padding={'5'} background={'gray.800'} borderRadius={'lg'}>
                        <Stack spacing={'0'} marginY={'1'}>
                            <HStack >
                                <Heading size={'sm'} color={'gray.400'} marginBottom={'2'}>
                                    ACTIVITY
                                </Heading>
                            </HStack>
                            <Box background={'gray.900'} padding={'3'} borderRadius={'lg'}>
                                {LinkItems2.map((link) => (
                                    <ActivityItem key={link.name} value={link.value}>{link.name}</ActivityItem>
                                ))}
                            </Box>
                        </Stack>
                        <Link>See More</Link>
                    </Box>
                    <Box padding={'5'} background={'gray.800'} borderRadius={'lg'}>
                        <Stack spacing={'0'} marginY={'1'}>
                            <HStack >
                                <Heading size={'sm'} color={'gray.400'} marginBottom={'2'}>
                                    BEST APRs
                                </Heading>
                            </HStack>
                            <Box background={'gray.900'} padding={'3'} borderRadius={'lg'}>
                                {LinkItems3.map((link) => (
                                    <APRItem key={link.name} value={link.value} icon={link.icon}>{link.name}</APRItem>
                                ))}
                            </Box>
                        </Stack>
                        <Link>See More</Link>
                    </Box>
                </Stack>
            </Flex>
        </>
    )

}

export default Sidebar