import { store } from './store';

/**
 * Fills content of the subpages
 * @module  Pokemon
 */
export default {
  name: 'pokemonDetails',
  /**
   * When instance is created, it finds and displays Pokemon
   */
  created () {
    this.findPokemon(this);
  },
  watch: {
    /**
     * If link changes (we went to another Pokemon), next Pokemon is displayed
     * @param to previous address
     * @param from next address
     */
    '$route' (to, from) {
      this.findPokemon(this);
    }
  },
  data() {
    return {
      pokemon : {},
      found : false
    }
  },
  methods: {
    /**
     * Takes Pokemon fro Store or tells if it is not there
     * @param obj actual instance
     */
    findPokemon(obj) {
      obj.pokemon = store.getters.returnPokemon(obj.$route.params.id);
      obj.found = obj.pokemon != undefined;

    }
  }
}
