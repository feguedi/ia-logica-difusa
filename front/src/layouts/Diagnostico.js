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
        console.log(`Diagnóstico ${ title }`)
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
            console.log(`Datos de ${ enfermedad.nombre } - ${ JSON.stringify(enfermedad) }`)
            enfArr.push(<SintomaRange name={ enfermedad.nombre } key={ enfermedad["_id"] } description={ enfermedad.descripcion } />)
        }

        const sintArr = []
        for (const sintoma of sintomas) {
            sintArr.push(<EnfermedadCheckbox name={ sintoma.nombre } key={ sintoma["_id"] } description={ sintoma.descripcion } />)
        }

        switch (title) {
            case 'general':
                return (
                    <General sintArr={ sintArr } />
                )
                case 'especifico':
                return (
                    <Especifico enfArr={ enfArr } sintArr={ sintArr } />
                )
            default:
                break;
        }

        return (<div><h1>Nada que regresar</h1></div>)
    }
}
