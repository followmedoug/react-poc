import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPokemonsRequest } from '../store/pokemon';

const PokemonList = () =>  {
  const dispatch = useDispatch();
  const pokemon = useSelector(state => state.pokemon)

  return <div>
    <ul>
      <li>teste</li>
      <li>teste</li>
      <li>teste</li>
      <li>teste</li>
    </ul>
    <button onClick={() => dispatch(getPokemonsRequest())}>clique</button>
  </div>
}

export default PokemonList