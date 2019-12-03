import React from 'react'
import { Flex, useTheme, useColorMode } from '@chakra-ui/core'

export default ({ info, sintArr, enfArr }) => {
    const { colorMode } = useColorMode()
    const { colors } = useTheme()

    const bgColor = { light: colors["grey"][50], dark: colors["blue grey"][900] }
    // const color = { light: "#000", dark: colors["grey"][50] }

    return (
        <Flex className={ info.className } flexDirection={ info.flexDirection } bg={ bgColor[colorMode] }>
            { sintArr }
            { enfArr }
        </Flex>
    )
}