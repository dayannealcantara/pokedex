import { createContext, useState, useCallback, useEffect } from 'react';

export const FavoritesContext = createContext([]);

export function FavoritesProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [curti, setCurti] = useState(false);

  useEffect(() => {
    const pokemonsFromLocalStorage = localStorage.getItem('pokemons')

    setPokemons(JSON.parse(pokemonsFromLocalStorage) ?? []);
  }, []);

  useEffect(() => {
    localStorage.setItem('pokemons', JSON.stringify(pokemons))
  }, [pokemons]);

  const removePokemon = useCallback((index, pokemon) => {
    const copy = [...pokemons]

    copy.splice(index, 1);
    setCurti(!curti);
    setPokemons(copy);
  }, [pokemons,curti]);

  const addPokemon = useCallback((pokemon) => {
    const copy = [...pokemons]

    copy.push(pokemon);

   if(copy.length > 12) return alert('Excedeu o número de pokemóns favoritos')
   setCurti(!curti)
    setPokemons(copy);
  }, [pokemons,curti])

  const togglePokemon = useCallback((pokemon) => {
    const pokemonIndex = pokemons?.findIndex((each) => each.id === pokemon.id)

    if (pokemonIndex !== -1) {
      return removePokemon(pokemonIndex, pokemon);
    }

    return addPokemon(pokemon);
  }, [pokemons, addPokemon, removePokemon]);

  const isMarked = useCallback((pokemon) => {
    return pokemons?.findIndex((each) => each.id === pokemon.id) !== -1;
  },[pokemons])

  return (
    <FavoritesContext.Provider value={{
      pokemons,
      setPokemons,
      curti,
       setCurti,
      togglePokemon,
      isMarked
    }}>
      {children}
    </FavoritesContext.Provider>
  )
}