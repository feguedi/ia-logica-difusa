import React from 'react'
import { Flex, Stack, useTheme, useColorMode, Heading } from '@chakra-ui/core'
import Toast from '../components/Toast'

export default ({ info, sintArr, enfArr }) => {
    const { colorMode } = useColorMode()
    const { colors } = useTheme()

    const bgColor = { light: colors["grey"][50], dark: colors["blue grey"][900] }
    const color = { light: "#000", dark: colors["grey"][50] }

    const verResultados = () => {

    }

    return (
        <Flex flexDirection="column" alignContent="center" bg={ bgColor[colorMode] } color={ color[colorMode] }>
            <Stack className="diagnostico-screen" px="1.75rem">
                <Heading as="h2" mt="0">Diagnóstico Específico</Heading>
                <Heading size="md">Síntomas</Heading>
                { sintArr }
                <Heading size="md">Enfermedades</Heading>
                { enfArr }
            </Stack>
            <Stack py="1em" alignItems="center" justifyContent="center" w="100%">
                <Toast bg={ bgColor[colorMode] } color={ color[colorMode] } onClick={ verResultados } />
            </Stack>
        </Flex>
    )
}