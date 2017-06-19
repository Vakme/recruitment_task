import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/**
 * Used to transport pokemon data from Table to Pokemon component.
 * Pokemons are downloaded only once per refreshing (destroying and creating all instances) so store keeps pokemon data and holds it to use on subpages.
 * Works like singleton.
 * @module store
 * @type {Store}
 */
export const store = new Vuex.Store({
  state: {
    pokedata: []
  },
  mutations: {
    /**
     * Adds pokemon to array
     * @param state contains actual array
     * @param elem  pokemon to add
     */
    add (state, elem) {
      state.pokedata.push(elem);
    }
  },
  getters: {
    /**
     * Lambda to find pokemon in an array and return it. Use: returnPokemon(id)
     * @param state   contains actual array
     * @param getters other getters (unused)
     */
    returnPokemon: (state, getters) => (id) => {
      return state.pokedata.find(currentValue => currentValue.id == id);
    }
    }
});
