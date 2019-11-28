import React from 'react'
import { Flex, Heading, Box } from '@chakra-ui/core'

export const Error = props => (
    <Flex>
        <Heading as="h2" size="3xl">Error</Heading>
        <Box justifyContent="center" alignItems="center">{ props.message }</Box>
    </Flex>
)