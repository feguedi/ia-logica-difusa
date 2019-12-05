import React from 'react'
import { Box, useTheme, useColorMode } from '@chakra-ui/core'
import FontAwesome from 'react-fontawesome'

export const Loading = ({ height }) => {
    const { colorMode } = useColorMode()
    const { colors } = useTheme()
    const bgColor = { light: colors["grey"][50], dark: colors["blue grey"][900] }
    const color = { light: "#000", dark: colors["grey"][50] }

    return (
        <Box 
            bg={ bgColor[colorMode] } 
            color={ color[colorMode] }
            py="1.5em" 
            w="100%" 
            h={ height }
            justifyContent="center" 
            alignContent="center" 
            alignItems="center"
            textAlign="center" 
        >
            <FontAwesome name="spinner" spin size="5x" />
        </Box>
    )
}