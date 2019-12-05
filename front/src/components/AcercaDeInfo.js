import React from 'react'
import { Flex, Text, Heading, useColorMode, Box, Button } from '@chakra-ui/core'
import FontAwesome from 'react-fontawesome'

export default () => {
    const { colorMode } = useColorMode()

    const bgColor = { light: "grey.50", dark: "blue grey.900" }
    const color = { light: "#000", dark: "grey.50" }

    return (
        <Flex flexDirection="column" bg={ bgColor[colorMode] } color={ color[colorMode] } w="100%" h="100%">
            <Heading as="h2">Acerca de</Heading>
            <Text>Proyecto presentado para la materia de Inteligencia Artificial impartida por la Dra. Sandra Canchola en la Facultad de Informática de la Universidad Autónoma de Querétaro.</Text>
            <Box w="100%" justifyContent="center" alignItems="center" alignContent="center">
                <Heading as="h4">Repositorio</Heading>
                <Button 
                    as="a" 
                    href="https://github.com/feguedi/ia-logica-difusa"
                    target="blank_"
                    p="0.5em"
                    style={{ textDecoration: "none" }} 
                    color={ color[colorMode] } 
                    bg={ bgColor[colorMode] }
                >
                    <FontAwesome name="github" size="3x" />
                </Button>
            </Box>
        </Flex>
    )
}