import React from 'react'
import { Button } from 'reactstrap'

export default class BotaoGol extends React.Component {
    handleClick(event) {
        event.preventDefault()
        this.props.marcarGol()
    }
    render() {
        return(
            <Button className="mt-4" color="primary" onClick={ this.handleClick.bind(this) }>GOL</Button>
        )
    }
}
