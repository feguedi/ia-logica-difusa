import React from 'react'
import { Box, useTheme, useColorMode } from '@chakra-ui/core'
import FontAwesome from 'react-fontawesome'

export const Loading = () => {
    const { colorMode } = useColorMode()
    const { colors } = useTheme()
    // const bgColor = { light: colors["grey"][50], dark: colors["blue grey"][900] }
    const color = { light: "#000", dark: colors["grey"][50] }

    return (
        <Box py="1.5em" w="100%" justifyContent="center" alignContent="center" textAlign="center" alignItems="center">
            <FontAwesome name="spinner" spin size="5x" color={ color[colorMode] } />
        </Box>
    )
}