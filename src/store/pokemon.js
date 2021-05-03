/** ACTIONS */
export const Types = {
  GET_POKEMONS_REQUEST: "pokemons/GET_POKEMONS_REQUEST",
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

/** REDUCERS */
export default function pokemon(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_POKEMONS_REQUEST:
      return { ...state, loading: true };

    default:
      return state;
  }
}

/** ACTION CREATORS */
export function getPokemonsRequest() {
  return { type: Types.GET_POKEMONS_REQUEST };
}
