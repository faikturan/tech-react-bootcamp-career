/* eslint-disable no-template-curly-in-string */
import React, { Component } from 'react';

import axios from "axios";

import Card from "./Card"

class CardGame extends Component {

    state = {
        deckId: '',
        cardsRemaining: 52,
        cards:[],
    }

    async componentDidMount(){
        const deck = await axios.get(
            'https://www.deckofcardsapi.com/api/deck/new/shuffle/'
        )
        this.setState( { deckId: deck.data.deck_id })
    }

    getCard = async () => {
        const response = await axios.get(
            'https://www.deckofcardsapi.com/api/deck/${this.state.deckId}/draw'
        )

        const rotate = Math.floor(Math.random() * 81 - 40)
        const transX = Math.floor(Math.random() * 41 - 20)
        const transY = Math.floor(Math.random() * 41 - 20)
        const transformStyle = {
            transform: `translateX(calc(-50% + ${transX}px))
            translateY(${transY}px) rotate(${rotate}deg)`,
        }

        const newCard = { ...response.data.cards[0], style:transformStyle }

        this.setState(prevSt => ({
            cardsRemaining: response.data.remaining,
            cards: [...prevSt.cards, newCard],
        }))

    }

  render() {
    return (
      <div>CardGame</div>
    )
  }
}


export default CardGame;