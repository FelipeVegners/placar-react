import React, { Component } from 'react'
import { Alert } from 'reactstrap'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      visible: false
    }
    
    this.onDismiss = this.onDismiss.bind(this)
  }

  onDismiss() {
    this.setState( { visible: true } )
  }

  toggle() {
    this.setState({
      visible: !this.state.visible
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1>Home works</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Alert color="success" toggle={this.toggle} isOpen={this.state.visible}>
              <h4 className="alert-heading">Obrigado!</h4>
              <p>Seus dados foram enviados com sucesso. Em breve um consultor entrará em contato com você</p>
              <hr />
              <p className="mb-0">Enquanto isso, saiba mais sobre nossos materiais</p>
            </Alert>
            <button className="btn btn-primary" onClick={this.toggle}>Trigger Alert</button>
          </div>
        </div>
      </div>
    )
  }
}
