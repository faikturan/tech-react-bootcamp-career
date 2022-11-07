import React, { Component } from 'react'
import './App.css'

import data from '../data/pokedexCards'

import Pokegame from './Pokegame'

export default class App extends Component {
  render() {
    return (
      <div className="App">
       <h1 className="App__title">Pokegame</h1>
        <Pokegame data={data} />
      </div>
    )
  }
}
