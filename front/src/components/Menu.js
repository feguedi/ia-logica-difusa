import React from 'react'
import { Flex, Text, Heading, Button, useColorMode, Stack } from '@chakra-ui/core'

export const Menu = ({ height }) => {
    const { colorMode } = useColorMode()
    const bgColor = { light: "grey.50", dark: "blue grey.900" }
    const color = { light: "#000", dark: "grey.50" }

    const ButtonDiagnostico = ({ href, title }) => (
        <Button as="a" href={ href } px="3" bg="#00897b" color="grey.50"
            _hover={{ bg: "#009688", boxShadow: "0px 5px 10px #212121dd" }} 
            mx="4" my="2" maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" 
            boxShadow="0px 5px 20px #212121dd" style={{ textDecoration: 'none' }}
        >
            { title }
        </Button>
    )

    return (
        <Flex bg={ bgColor[colorMode] } flexDirection="column" alignItems="center" justifyContent="center" h={ height } w="100%">
            <Heading color={ color[colorMode] } as="h2" size="xl" alignItems="center" justifyContent="center">Diagnóstico de Enfermedades por Trastornos Alimenticios</Heading>
            <Text color={ color[colorMode] } fontSize="m" textAlign="center">Proyecto realizado por:<br />#NOMBRE#</Text>
            <Stack flexDirection={["column", "row"]} spacing={ 8 } align="center">
                <ButtonDiagnostico href="/general" title="Diagnóstico general" />
                <ButtonDiagnostico href="/especifico" title="Diagnóstico específico" />
            </Stack>
        </Flex>
    )
}
