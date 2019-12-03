import React from 'react'
import { Flex, Stack, useTheme, useColorMode } from '@chakra-ui/core'

export default ({ enfArr, info }) => {
    const { colorMode } = useColorMode()
    const { colors } = useTheme()

    const bgColor = { light: colors["grey"][50], dark: colors["blue grey"][900] }
    const color = { light: "#000", dark: colors["grey"][50] }

    return (
        <Flex flexDirection="column" alignContent="center" bg={ bgColor[colorMode] } color={ color[colorMode] }>
            <Stack className="diagnostico-screen" px="1.75rem">
                { enfArr }
            </Stack>
        </Flex>
    )
}