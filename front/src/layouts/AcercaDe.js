import React, { Component } from 'react'
import AcercaDeInfo from '../components/AcercaDeInfo'
import { Flex } from '@chakra-ui/core'

export default class AcercaDe extends Component {
    render() {
        return (
            <Flex h="100%">
                <AcercaDeInfo />
            </Flex>
        )
    }
}
