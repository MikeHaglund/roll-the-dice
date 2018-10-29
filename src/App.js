import React, { Component } from 'react'
import styled from 'styled-components'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Dice } from './Dice'



const DiceAppBar = styled(AppBar)`
  background-color: red !important;
`

const Container = styled.section`
  margin-top: 80px;
`

export default class extends Component {
  render() {
    return (
      <section>
        <DiceAppBar>
          <Toolbar>
            <Typography>My App</Typography>
          </Toolbar>
        </DiceAppBar>
        <Container>
          <Dice sides={6} />
          <Dice sides={20} />
        </Container>
      </section>
    )
  }
}
