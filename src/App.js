import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'

const Logo = styled.div`
  font-size: 1.5em;
`
const ControlButton = styled.div `

`

const AppLayout = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Logo>
          CryptoDash
        </Logo>
        <ControlButton>
          Dashboard
        </ControlButton>
        <ControlButton>
        Settings
        </ControlButton>
      </AppLayout>
    );
  }
}

export default App;
