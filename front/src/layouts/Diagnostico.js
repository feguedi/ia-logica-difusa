import React, { Component } from 'react'
import EnfermedadRange from '../components/EnfermedadRange'
import SintomaCheckbox from '../components/SintomaCheckbox'
import General from '../components/General'
import Especifico from '../components/Especifico'
import { Enfermedades, Sintomas } from '../data'
import { Error } from './Error'
import { Loading } from './Loading'

export default class Diagnostico extends Component {
    constructor(props) {
        super(props)
        let title = this.props.location.pathname
        title = title.slice(1)
        this.state = { enfermedades: [], sintomas: [], title,
            error: false, isLoading: true, errMsg: ""
        }
        document.title = `Lógica Difusa - Diagnóstico ${ this.state.title }`
    }

    componentDidMount() {
        this.setState({ enfermedades: Enfermedades, sintomas: Sintomas, isLoading: false })
    }

    render() {
        const { title, isLoading, errMsg, error, enfermedades, sintomas } = this.state

        if (isLoading)
            return (<Loading />)

        if (error) 
            return (<Error message={ errMsg } />)

        const enfArr = []
        for (const enfermedad of enfermedades) {
            enfArr.push(<EnfermedadRange name={ enfermedad.nombre } key={ enfermedad.id } />)
        }

        const sintArr = []
        for (const sintoma of sintomas) {
            sintArr.push(<SintomaCheckbox name={ sintoma.nombre } key={ sintoma.id } />)
        }

        switch (title) {
            case 'general':
                return (
                    <General enfArr={ enfArr } />
                )
            case 'específico':
                return (
                    <Especifico enfArr={ enfArr } sintArr={ sintArr } />
                )
            default:
                break;
        }

        return (<div><h1>Nada que regresar</h1></div>)
    }
}
