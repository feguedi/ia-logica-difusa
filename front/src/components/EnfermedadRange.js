import React, { useState } from 'react'
import { Flex, Box, Badge, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Stack, Tooltip, useColorMode } from '@chakra-ui/core'
import InputRange from 'react-input-range'

export const ReactInputRange = ({ name, value }) => (
    <Flex flexDirection="column">
        <Box flexDirection="row" justifyContent="space-between" alignItems="center">
            <Text>{ name }</Text>
            <Badge rounded="full" px="2" variantColor="tomato">{ value }</Badge>
        </Box>
        <InputRange minValue={ 0 } maxValue={ 10 } value={ value } />
    </Flex>
)

export default ({ name, key, description }) => {
    const [state, setState] = useState({ value: 0 })
    const { colorMode } = useColorMode()
    const bgSlider = {light: "grey.500", dark: "grey.300"}
    let bgTrackFilled
    switch (state.value) {
        case 0:
        case 1:
            bgTrackFilled = "green.400"
            break
        case 2:
        case 3:
            bgTrackFilled = "yellow.600"
            break
        case 4:
        case 5:
            bgTrackFilled = "amber.500"
            break
        case 6:
        case 7:
            bgTrackFilled = "orange.400"
            break
        case 8:
        case 9:
            bgTrackFilled = "deep orange.400"
            break
        case 10:
            bgTrackFilled = "red.600"
            break
        default:
            break
    }

    let propsTooltip = { 
        placement: "left-end",
        label: description
    }
    let text
    if (description)
        text = (
            <Tooltip hasArrow { ...propsTooltip }>
                <Text w="100%">{ name }</Text>
            </Tooltip>
        )
    else
        text = <Text w="100%">{ name }</Text>

    return (
        <Stack>
            <Flex flexDirection="row" margin="auto" w="100%" justifyContent="space-between">
                { text }
                <Badge bg="danger" rounded="lg" m="auto" color="white">{ state.value }</Badge>
            </Flex>
            <Slider
                className="enfermedad-range" 
                key={ key }
                id={ key }
                max={ 10 } step={ 1 } defaultValue={ 0 } 
                onChange={value => { 
                    console.log(`Valores del slider ${ name }: ${ value }`)
                    setState({ value })
            }}>
                <SliderTrack bg={ bgSlider[colorMode] } />
                <SliderFilledTrack bg={ bgTrackFilled } />
                <SliderThumb bg="grey.200" _hover={{ bg: "grey.300" }} />
            </Slider>
        </Stack>
    )
}