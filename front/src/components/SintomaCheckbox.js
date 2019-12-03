import React from 'react'
import { Flex, useTheme, useColorMode } from '@chakra-ui/core'

export default ({ sintArr }) => {
    const { colors } = useTheme()
    const { colorMode } = useColorMode()
    const bgColor = { light: colors["grey"][50], dark: colors["blue grey"][900] }
    const color = { light: "#000", dark: colors["grey"][50] }
    return (
        <Flex bg={ bgColor[colorMode] } color={ color[colorMode] }>

        </Flex>
    )
}