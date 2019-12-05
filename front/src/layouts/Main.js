import React, { Component } from 'react'
import { Flex } from '@chakra-ui/core'
import { Menu } from '../components/Menu'

export default class Main extends Component {
    constructor() {
        super()
        this.state = { height: 0 }
        document.title = "Lógica Difusa - Menú"
    }

    componentDidMount() {
        // this.setState({ height: "100%" })
        this.setState({ height: document.getElementsByTagName('html')[0].scrollHeight - 72 })
    }

    render() {
        const { height } = this.state
        return (
            <Flex alignContent="center" justifyContent="center" alignItems="center">
                <Menu height={ height } />
            </Flex>
        )
    }
}
