import React from 'react'
import { Button } from 'reactstrap'

import Time from './Time'
import Partida from './Partida'
import InputField from './InputField'
import Test from './Test'

export default class PlacarContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            gols_casa: 0,
            gols_visitante: 0,
            inputLinkClicked: false,
            typed: '',
        }
    }

    marcarGolCasa() {
        this.setState({
            gols_casa: this.state.gols_casa + 1,
        })
    }

    marcarGolVisitante() {
        this.setState({
            gols_visitante: this.state.gols_visitante + 1,
        })
    }

    addPlayer() {
      this.setState({
        inputLinkClicked: true,
      })
    }


    render() {
        const { partida, casa, visitante } = this.props
        return (
            <div className="container">
              <div className="row">
                <div className="col-4 text-center">
                    <small>Casa</small>
                    <Time
                        nome={ casa.nome }
                        gols={ this.state.gols_casa }
                        marcarGol={ this.marcarGolCasa.bind(this) }

                    />
                </div>
                <div className="col-4 text-center d-flex align-items-center">
                    <Partida { ...partida }/>
                </div>
                <div className="col-4 text-center">
                    <small>Visitante</small>
                    <Time
                        nome={ visitante.nome }
                        gols={ this.state.gols_visitante }
                        marcarGol={this.marcarGolVisitante.bind(this) }
                    />
                </div>
              </div>
              <div className="row">
                <div className="col-4 mt-4 text-center">
                  {
                    this.state.inputLinkClicked
                    ?
                    <div>
                      <InputField />
                    </div>
                    :
                      <div></div>
                  }
                  <Button color="warning" className="mt-4" onClick={this.addPlayer.bind(this)}>Player Name</Button>
                </div>
              </div>
            </div>
        )
    }
}
