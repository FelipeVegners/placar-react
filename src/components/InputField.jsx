import React from 'react'

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      textvalue: "",
      test: ""
    }
    this.handleAddTodoItem = this.handleAddTodoItem.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handledelTodoItem = this.handledelTodoItem.bind(this)
  }
  handleChange(e) {
    this.setState({
      textvalue: e.target.value
    })
  }
  handleAddTodoItem() {
    this.state.value.push(this.state.textvalue)
    this.setState(
      this.state
    )
    this.state
    console.log(this.state.value)
  }
  handledelTodoItem(v) {
    for (var i = 0; i < this.state.value.length; i++) {
      if (this.state.value[i] == v) {
        delete this.state.value[i]
      }
    }
    this.setState({
      value: this.state.value
    })
    console.log(this.state.value)
  }

  render() {
    let { value } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <input type="text" placeholder="player name" className="form-control" onChange={this.handleChange} />
          </div>
          <div className="col-3">
            <button className="btn btn-primary" onClick={this.handleAddTodoItem}>Add</button>
          </div>
        </div>
        <div className="row">
          {value.map((v) => {
            return (
              <div>
                <p>{v}</p>
                <button className="btn btn-danger" onClick={this.handledelTodoItem.bind(this, v)}>X</button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
