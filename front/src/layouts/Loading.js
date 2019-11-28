import React from 'react'
import { Box } from '@chakra-ui/core'
import FontAwesome from 'react-fontawesome'

export const Loading = () => (
    <Box py="1.5em" w="100%" justifyContent="center" alignContent="center" textAlign="center" alignItems="center">
        <FontAwesome name="spinner" spin size="5x" />
    </Box>
)