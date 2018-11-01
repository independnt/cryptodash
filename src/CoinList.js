import React from 'react';
import styled from 'styled-components';
import {subtleBoxShadow, lightBlueBackground} from './Style';
const CoinGrid = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
`
const CoinTile = styled.div `
  ${subtleBoxShadow}
  ${lightBlueBackground}
  padding: 10px;
  &:hover{
      cursor: pointer;
      border: 1px solid white;
  }
`

export default function(){
  return <CoinGrid>

    {Object.keys(this.state.coinList).map(coin =>
      <CoinTile>
        {coin}
      </CoinTile>)}
  </CoinGrid>
}
