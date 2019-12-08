import React, { useState } from 'react'
import { Flex, Stack, Heading, useColorMode } from '@chakra-ui/core'
import SintomaRange from './EnfermedadRange'
import { Sintomas } from '../data'
import Toast from './Toast'

export default () => {
    const [state, setState] = useState({ values: [] })
    const { colorMode } = useColorMode()

    const bgColor = { light: "grey.50", dark: "blue grey.900" }
    const color = { light: "#000", dark: "grey.50" }
    const sintArr = []

    const verResultados = () => {
        let slidersVal = document.getElementsByClassName('sintoma-range')
        console.log(`Valor de los sliders: ${ JSON.stringify(slidersVal) }`)
        let values = slidersVal.filter(slider => {
            return slider.value > 0
        })
        setState({ values })
    }

    const handleChangeSlider = () => {
        
    }

    for (const sintoma of Sintomas) {
        sintArr.push(<SintomaRange 
            nombre={ sintoma.nombre } 
            key={ sintoma["_id"] } 
            descripcion={ sintoma.descripcion }
            onChangeSlider={ handleChangeSlider } />)
    }

    const isDisabled = () => {
        if (state.values)
            return state.values.length < 1
        return true
    }

    return (
        <Flex flexDirection="column" alignContent="center" bg={ bgColor[colorMode] } color={ color[colorMode] }>
            <Stack className="diagnostico-screen" px="1.75rem">
                <Heading as="h2" mt="0">Diagnóstico General</Heading>
                <Heading size="md">Enfermedades</Heading>
                { sintArr }
            </Stack>
            <Stack py="1em" alignItems="center" justifyContent="center" w="100%">
                <Toast bg={ bgColor[colorMode] } color={ color[colorMode] } onClick={ verResultados } isDisabled={ isDisabled() } />
            </Stack>
        </Flex>
    )
}