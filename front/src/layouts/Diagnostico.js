import React, { Component } from 'react'
import General from '../components/General'
import Especifico from '../components/Especifico'
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

        switch (title) {
            case 'general':
                return (
                    <General/>
                )
                case 'especifico':
                return (
                    <Especifico/>
                )
            default:
                break;
        }

        return (<div><h1>Nada que regresar</h1></div>)
    }
}
