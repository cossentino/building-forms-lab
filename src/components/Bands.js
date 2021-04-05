import React, { Component } from 'react'

class Bands extends Component {
  render() {
    return(
      <div>
        <ul>
          {this.props.bands.map(b => {
            return <li>{b.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Bands