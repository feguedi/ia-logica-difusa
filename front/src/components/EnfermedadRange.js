import React, { useState } from 'react'
import { Flex, Badge, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Stack, Tooltip, useColorMode } from '@chakra-ui/core'

export default ({ nombre, key, descripcion, onChangeSlider }) => {
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
        label: descripcion
    }
    let text
    if (descripcion)
        text = (
            <Text w="100%">
                <Tooltip hasArrow { ...propsTooltip }>
                    { nombre }
                </Tooltip>
            </Text>
        )
    else
        text = <Text w="100%">{ nombre }</Text>

    return (
        <Stack>
            <Flex flexDirection="row" margin="auto" w="100%" justifyContent="space-between">
                { text }
                <Badge bg="danger" rounded="lg" m="auto" color="white">{ state.value }</Badge>
            </Flex>
            <Slider
                className="sintoma-range" 
                key={ key }
                id={ key }
                max={ 10 } step={ 1 } defaultValue={ 0 } 
                onChange={value => { 
                    setState({ value })
                    onChangeSlider()
            }}>
                <SliderTrack bg={ bgSlider[colorMode] } />
                <SliderFilledTrack bg={ bgTrackFilled } />
                <SliderThumb bg="grey.200" _hover={{ bg: "grey.300" }} />
            </Slider>
        </Stack>
    )
}