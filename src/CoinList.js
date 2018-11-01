import React from 'react';
import styled from 'styled-components';
import {subtleBoxShadow, lightBlueBackground, greenBoxShadow} from './Style';
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
      ${greenBoxShadow}
  }
`

export default function(){
  return <CoinGrid>

    {Object.keys(this.state.coinList).map(coin =>
      <CoinTile>
        {this.state.coinList[coin].CoinName}
        {this.state.coinList[coin].Symbol}
        {<img style={{height: '50px'}} src={`http://cryptocompare.com/${this.state.coinList[coin].ImageUrl}`} />}
      </CoinTile>)}
  </CoinGrid>
}
