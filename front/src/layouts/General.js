import React, { Component } from 'react'
import { Flex } from '@chakra-ui/core'
import EnfermedadRange from '../components/EnfermedadRange'
import Enfermedades from '../data/Enfermedades'
import { Error } from './Error'
import { Loading } from './Loading'

export default class General extends Component {
    constructor(props) {
        super(props)
        this.state = { enfermedades: [],
            error: false, isLoading: true, errMsg: ""
        }
        document.title = "Lógica Difusa - Diagnóstico general"
    }

    componentDidMount() {
        this.setState({ enfermedades: Enfermedades, isLoading: false })
    }

    render() {
        const { isLoading, errMsg, error, enfermedades } = this.state

        if (isLoading)
            return (<Loading />)

        if (error) 
            return (<Error message={ errMsg } />)

        const enfArr = []
        for (const enfermedad of enfermedades) {
            enfArr.push(<EnfermedadRange name={ enfermedad.nombre }  />)
        }

        return (
            <Flex flexDirection="column">
                { enfArr }
            </Flex>
        )
    }
}
