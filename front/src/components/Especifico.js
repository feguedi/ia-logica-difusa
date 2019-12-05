import React from 'react'
import { Box, Flex, Stack, useColorMode, Heading, CheckboxGroup } from '@chakra-ui/core'
import Toast from '../components/Toast'

export default ({ sintArr, enfArr }) => {
    const { colorMode } = useColorMode()

    const bgColor = { light: "grey.50", dark: "blue grey.900" }
    const color = { light: "#000", dark: "grey.50" }

    const verResultados = () => {

    }

    const isDisabled = () => {
        return false
    }

    return (
        <Flex flexDirection="column" alignContent="center" bg={ bgColor[colorMode] } color={ color[colorMode] }>
            <Stack className="diagnostico-screen" px="1.75rem">
                <Heading as="h2" mt="0">Diagnóstico Específico</Heading>
                <Stack flexDirection={["column", "row"]}>
                    <Box p="4" w="50%" borderWidth="1px" rounded="lg" overflow="hidden" borderColor={ color[colorMode] }>
                        <Heading size="md">Síntomas</Heading>
                        { sintArr }
                    </Box>
                    <Box p="4" w="50%" borderWidth="1px" rounded="lg" overflow="hidden" borderColor={ color[colorMode] }>
                        <Heading size="md">Enfermedades</Heading>
                        <CheckboxGroup my="1.25em">
                        { enfArr }
                        </CheckboxGroup>
                    </Box>
                </Stack>
            </Stack>
            <Stack py="1em" alignItems="center" justifyContent="center" w="100%">
                <Toast bg={ bgColor[colorMode] } color={ color[colorMode] } onClick={ verResultados } isDisabled={ isDisabled } />
            </Stack>
        </Flex>
    )
}