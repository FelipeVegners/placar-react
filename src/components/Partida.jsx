import React from 'react'

export default class Partida extends React.Component {
    render() {
        return (
            <div>
                <h5>{ this.props.estadio }</h5>
                <div>
                    <span>{ this.props.data }</span>
                    <span> - </span>
                    <span>{ this.props.horario }</span>
                </div>
            </div>
        )
    }
}