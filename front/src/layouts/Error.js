import React from 'react'
import { Flex, Heading, Box, useColorMode } from '@chakra-ui/core'

export const Error = props => {
    const { colorMode } = useColorMode()

    const bgColor = { light: "grey.50", dark: "blue grey.900" }
    const color = { light: "#000", dark: "grey.50" }

    return (
        <Flex bg={ bgColor[colorMode] } color={ color[colorMode] }>
            <Heading as="h2" size="3xl">Error</Heading>
            <Box justifyContent="center" alignItems="center">{ props.message }</Box>
        </Flex>
    )
}