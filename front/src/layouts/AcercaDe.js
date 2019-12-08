import React, { Component } from 'react'
import AcercaDeInfo from '../components/AcercaDeInfo'
import { Flex } from '@chakra-ui/core'

export default class AcercaDe extends Component {
    render() {
        return (
            <Flex h={ document.getElementsByTagName('html')[0].scrollHeight - 72 }>
                <AcercaDeInfo />
            </Flex>
        )
    }
}
