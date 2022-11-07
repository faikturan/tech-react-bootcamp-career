import React, { Component } from 'react'
import './App.css'

import CoinGame from './components/CoinGame'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <CoinGame />
      </div>
    )
  }
}
