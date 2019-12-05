import React from 'react'
import { Flex, Stack, Heading, useColorMode, Button } from '@chakra-ui/core'
import Toast from './Toast'

export default ({ sintArr }) => {
    const { colorMode } = useColorMode()

    const bgColor = { light: "grey.50", dark: "blue grey.900" }
    const color = { light: "#000", dark: "grey.50" }

    const verResultados = () => {

    }

    const isDisabled = () => {
        return true
    }

    const toast = <Toast bg={ bgColor[colorMode] } color={ color[colorMode] } onClick={ verResultados } isDisabled={ isDisabled } />
    const button = <Button></Button>

    return (
        <Flex flexDirection="column" alignContent="center" bg={ bgColor[colorMode] } color={ color[colorMode] }>
            <Stack className="diagnostico-screen" px="1.75rem">
                <Heading as="h2" mt="0">Diagnóstico General</Heading>
                <Heading size="md">Enfermedades</Heading>
                { sintArr }
            </Stack>
            <Stack py="1em" alignItems="center" justifyContent="center" w="100%">
                { isDisabled && toast }
                { !isDisabled && button }
            </Stack>
        </Flex>
    )
}