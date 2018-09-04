import React from 'react';

import PlacarContainer from './PlacarContainer'

const dados = {
    partida: {
        estadio: "Allianz Park",
        data: "04/09/2018",
        horario: "19h00",
    },
    casa: {
        nome: "Palmeiras",
    },
    visitante: {
        nome: "Corinthians",
    }
}

export default class App extends React.Component {
    render() {
        return (
            <PlacarContainer { ...dados } />
        )
    }
}