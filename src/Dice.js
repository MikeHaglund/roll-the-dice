import React, { Component } from 'react'
import styled from 'styled-components'


const roll = (sides = 6) => {
  const min = 1
  const max = Math.floor(sides)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const DiceContainer = styled.section`
  border: 1px solid #666;
  padding: 16px;
  margin: 8px;
  background: #e6e6e6;
`

const DiceSides = styled.h3`
  color: red;
  padding: 0;
  margin: 0;
`

const DiceResults = styled.section`
  background: #e6e6e6;
  padding: 3px;
`

const Button = styled.button`
  text-transform: uppercase;
  border: 1px solid #666;
  background: #e6e6e6;
  padding: 8px 12px;
  margin-top: 16px;
`

const RollButton = styled(Button)`
  background: darkorchid;
  color: white;
  font-weight: bold;
`

export class Dice extends Component {
  
  state = {
    rolled: null,
  }
  
  render() {
    const sides = this.props.sides
    const rolled = this.state.rolled
    // console.log(rolled)
    // console.log(sides)
    return (
      <DiceContainer>
        <DiceSides>
          Sides: {sides}
        </DiceSides>
        
        {rolled && (
          <DiceResults>
            Rolled: {rolled}
          </DiceResults>
        )}
        
        
        <RollButton
          onClick={(e) => {
            const result = roll(sides)
            this.setState({ rolled: result })
          }}
        >Roll</RollButton>
      </DiceContainer>
    )
  }
}
