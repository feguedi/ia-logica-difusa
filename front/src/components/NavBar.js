import React from 'react'
import { Button, Text, useColorMode, Flex } from '@chakra-ui/core'
import FontAwesome from 'react-fontawesome'

export default () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const bgColor = { light: "grey.50", dark: "blue grey.900" }
    const color = { light: "#000", dark: "grey.50" }

    const sun = <FontAwesome name="sun-o" size="2x" />
    const moon = <FontAwesome name="moon-o" size="2x" />

    return (
        <Flex bg={ bgColor[colorMode] } px={ 5 } py={ 4 }>
            <Flex className="navBar" justifyContent="space-between" autoRows="auto" flexDirection="row" w="100%">
                <Text as="a" href="/" style={{ textDecoration: 'none' }} color={ color[colorMode] } fontSize="24px" fontWeight="bold">Lógica difusa</Text>
                <Flex justifyContent="center" spacing={ 6 } alignItems="center">
                    <Text as="a" href="/acerca-de" style={{ textDecoration: 'none' }} color={ color[colorMode] } px={ 2 }>Acerca de</Text>
                    <Button borderWidth="0" onClick={ toggleColorMode } variant="ghost" variantColor="white" color={ color[colorMode] }>{ colorMode === 'light' ? moon : sun }</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}
