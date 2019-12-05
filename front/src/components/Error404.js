import React from 'react'
import { Flex, Heading, Text, useColorMode } from '@chakra-ui/core'

export default ({ location }) => {
    const { colorMode } = useColorMode()
    
    const bgColor = { light: "grey.50", dark: "blue grey.900" }
    const color = { light: "#000", dark: "grey.50" }

    return (
        <Flex className="container" flexDirection="column" bg={ bgColor[colorMode] } color={ color[colorMode] }>
            <Heading as="h2">Error 404</Heading>
            <Text>Página no encontrada - { location }</Text>
        </Flex>
    )
}