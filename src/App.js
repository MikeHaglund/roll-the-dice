import React, { Component } from 'react'
import './App.css'

const roll = (sides = 6) => {
  const min = 1
  const max = Math.floor(sides)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

class Dice extends Component {
  
  state = {
    rolled: null
  }
  
  render() {
    const sides = this.props.sides
    const rolled = this.state.rolled
    // console.log(rolled)
    // console.log(sides)
    return (
      <section>
        <p>Number of Sides: {sides}</p>
        <p>You rolled: {rolled}</p>
        <button onClick={(e) => {
          const result = roll(sides)
          this.setState({ rolled: result })
        }}>Roll</button>
      </section>
    )
  }
}

export default class extends Component {
  render() {
    return (
      <div>
        <Dice sides={6} />
        <Dice sides={20} />
      </div>
    )
  }
}
