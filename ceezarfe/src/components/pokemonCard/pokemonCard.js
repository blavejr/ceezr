import React, {useState} from 'react';
import { getImageUrl } from '../../utils/index';



export default function PokemonCard({setOpenStack, openStack, idx, ...pokemon}) {
    const flipped = openStack.some(i => i === idx)
    const toggleFlip = (cardIndex) => {
        // remove a closing card
        setOpenStack(openStack.filter((i) => i !== cardIndex))
        
        if (openStack.length >= 2) {
            setOpenStack([cardIndex])
        }else{
            setOpenStack([...openStack, cardIndex])
        }

        // setFlipped(!flipped);
    }

    return (
        <article id={pokemon.id}
        className={`pokemon-card ${flipped ? 'flipped' : ''}`}
            onClick={()=>toggleFlip(idx)}
            >
                {
                    !flipped ? 
                    <div className='front'>
                        <figure>
                            <img src={getImageUrl(pokemon.id)} alt={pokemon.name} />
                            <section className='pokemon-stand' />
                        </figure>
                        <h2>
                            {pokemon.name}
                        </h2>
                        <section>
                            <p><strong>Type 1:</strong> {pokemon.type_1}</p>
                            <p><strong>Type 2:</strong> {pokemon.type_2}</p>
                        </section>
                    </div>:
            <div className='back'>
            <h3>
                {pokemon.name}
            </h3>
                    <p><strong>Type 1:</strong> {pokemon.type_1}</p>
                    <p><strong>Type 2:</strong> {pokemon.type_2}</p>
                    <p><strong>Attack:</strong> {pokemon.attack}</p>
                    <p><strong>Defense:</strong> {pokemon.defense}</p>
                    <p><strong>Generation:</strong> {pokemon.generation}</p>
                    <p><strong>Health:</strong> {pokemon.hP}</p>
                    <p><strong>Legendary:</strong> {pokemon.legendary?.toString()}</p>
            </div>
                }

        </article>
    )
}
