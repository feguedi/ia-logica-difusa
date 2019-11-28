import React from 'react'
import { Flex, Box, Badge, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Stack } from '@chakra-ui/core'
import InputRange from 'react-input-range'

export const ReactInputRange = props => (
    <Flex flexDirection="column">
        <Box flexDirection="row" justifyContent="space-between" alignItems="center">
            <Text>{ props.name }</Text>
            <Badge rounded="full" px="2" variantColor="tomato">{ props.value }</Badge>
        </Box>
        <InputRange minValue={ 0 } maxValue={ 10 } value={ props.value } />
    </Flex>
)

let rangeValue = 0

export default ({ name }) => (
    <Stack >
        <Flex flexDirection="row" w="100%" justifyContent="space-between">
            <Text>{ name }</Text>
            <Badge bg="danger" rounded="lg">{ rangeValue }</Badge>
        </Flex>
        <Slider max={ 10 } step={ 1 } defaultValue={ 0 } onChange={e => rangeValue = e.value}>
            <SliderTrack bg="grey.100" />
            <SliderFilledTrack bg={["red.500", "orange.500", "yellow.500", "green.500"]} />
            <SliderThumb />
        </Slider>
    </Stack>
)