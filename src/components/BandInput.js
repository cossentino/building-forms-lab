// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {

  constructor() {
    super()
    this.state = {
      name: ""
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: "",
    })
  }

  handleChange = e => {
    this.setState({
      name: e.target.value,
    })
  }


  render() {
    return(
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Add Band Here: </label>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="submit" />
        </form>
        {this.state.name}
      </div>
    )
  }
}


export default BandInput
