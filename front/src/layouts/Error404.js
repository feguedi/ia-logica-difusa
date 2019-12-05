import React, { Component } from 'react'
import Error from '../components/Error404'

export default class Error404 extends Component {
    render() {
        let location = this.props.location.pathname
        location = location.split('/')
        return (
            <Error location={ location } />
        )
    }
}
