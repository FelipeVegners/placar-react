import React from 'react'

export default class InputField extends React.Component {
  constructor() {
      super()
      this.state = {
          typed: '',
      }
  }

  onChange(e) {
    this.setState({
      typed: e.target.value
    })
  }

  render() {
    return(
      <div>
        <div className="form-group row">
          <div className="col-12">
            <input type="text" className="form-control" onChange={ this.onChange.bind(this) }/>
          </div>
        </div>
        <span>{ this.state.typed }</span>
      </div>
    )
  }
}
