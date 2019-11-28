import React from 'react'
import { Flex, Text, Heading, Button, useColorMode, useTheme, Stack } from '@chakra-ui/core'

export const Menu = props => {
    const Theme = useTheme()
    const bgColor = { light: Theme.colors["grey"][50], dark: Theme.colors["blue grey"][900] }
    const color = { light: "#000", dark: Theme.colors["grey"][50] }

    const ButtonDiagnostico = props_ => (
        <Button as="a" href={ props_.href } px="3" bg="#00897b" color={ Theme.colors["grey"][50] } 
            _hover={{ bg: "#009688", boxShadow: "0px 5px 10px #212121dd" }} 
            mx="4" my="2" maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" 
            boxShadow="0px 5px 20px #212121dd" style={{ textDecoration: 'none' }}
        >
            { props_.title }
        </Button>
    )

    return (
        <Flex bg={ bgColor[useColorMode().colorMode] } flexDirection="column" alignItems="center" justifyContent="center" h={ props.height } w="100%">
            <Heading color={ color[useColorMode().colorMode] } as="h2" size="xl" alignItems="center" justifyContent="center">Diagnóstico de Enfermedades por Trastornos Alimenticios</Heading>
            <Text color={ color[useColorMode().colorMode] } fontSize="m" textAlign="center">Proyecto realizado por:<br />#NOMBRE#</Text>
            <Stack flexDirection={["column", "row"]} spacing={ 8 } align="center">
                <ButtonDiagnostico href="/general" title="Diagnóstico general" />
                <ButtonDiagnostico href="/especifico" title="Diagnóstico específico" />
            </Stack>
        </Flex>
    )
}
