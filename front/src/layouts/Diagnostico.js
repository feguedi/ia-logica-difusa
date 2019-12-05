import React, { Component } from 'react'
import SintomaRange from '../components/EnfermedadRange'
import EnfermedadCheckbox from '../components/SintomaCheckbox'
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
        this.state = { title,
            error: false, isLoading: true, errMsg: ""
        }
        document.title = `Lógica Difusa - Diagnóstico ${ this.state.title }`
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 400)
    }

    render() {
        const { title, isLoading, errMsg, error } = this.state

        if (isLoading)
            return (<Loading height={ document.getElementsByTagName('html')[0].scrollHeight - 72 } />)

        if (error) 
            return (<Error message={ errMsg } />)

        const sintArr = []
        for (const sintoma of Sintomas) {
            sintArr.push(<SintomaRange nombre={ sintoma.nombre } key={ sintoma["_id"] } descripcion={ sintoma.descripcion } />)
        }

        const enfArr = []
        for (const enfermedad of Enfermedades) {
            enfArr.push(<EnfermedadCheckbox nombre={ enfermedad.nombre } key={ enfermedad["_id"] } descripcion={ enfermedad.descripcion } />)
        }

        switch (title) {
            case 'general':
                return (
                    <General sintArr={ sintArr } />
                )
                case 'especifico':
                return (
                    <Especifico sintArr={ sintArr } enfArr={ enfArr } />
                )
            default:
                break;
        }

        return (<div><h1>Nada que regresar</h1></div>)
    }
}
