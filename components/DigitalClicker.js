import React from 'react'

export default class DigitalClicker extends React.Component {
  constructor() {
    super()
    this.state = { timesClicked: 0 }
    this.click = this.click.bind(this) // inside click function this'ing
  }
  click(event) {
    this.setState( ( previousState )=>{
      return { timesClicked: previousState.timesClicked + 1 }
    })
  }
  render() {
    return (
      <button onClick={this.click}>{this.state.timesClicked}</button>
    )
  }
}
