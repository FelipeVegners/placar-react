import React from 'react'
import { Button } from 'reactstrap'

export default class BotaoGol extends React.Component {
    handleClick(event) {
        event.preventDefault()
        this.props.marcarGol()
    }
    render() {
        return(
            <Button color="success" onClick={ this.handleClick.bind(this) }>GOL!</Button>
        )
    }
}
