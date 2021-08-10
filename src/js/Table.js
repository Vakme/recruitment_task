import xhr from 'xhr'

import { store } from './store';

import Router from './../router/index';

/**
 * Fills the content of the main page
 * @module Table
 */
export default{
  name: 'table',
  /**
   * Runs downloading when instance is created
   */
  created () {
    this.getPokeList(this);
  },
  data () {
    return {
      array: [],
      sliceLimit : 4,
      pageNumber : 1,
      ready : false,
      elemsNum : 0.05
    }
  },
  watch: {
    /**
     * Watches adding elements to array to update loader counter
     */
    array: function () {
      if(this.array.length == 20) {
        this.ready = true;
      }
      this.elemsNum = this.array.length/20;
    }
  },
  methods: {
    /**
     * Downloads pokemon list from server. Uses xrh for AJAX
     * @param obj component instance
     */
    getPokeList: function (obj) {
      let url = 'https://pokeapi.co/api/v2/pokemon/';
      xhr(url, function (err, resp, body) {
        if(resp.statusCode == 200) {
          const res = JSON.parse(body);
          for(let row in res.results) {
            getPokemon(obj, res.results[row].url);
          }
          obj.datagot = res;
        }
        else {
          Router.go('/error');
          console.log('err');
        }
      });
    }
  }
}

/**
 * Downloads Pokemon data from server. Uses xhr for AJAX
 * @param obj instance of the component to add Pokemon to
 * @param url link to Pokemon data
 */
let getPokemon = function (obj, url) {
  xhr(url, function (err, resp, body) {
    if(resp.statusCode == 200) {
      const res = JSON.parse(body);
      obj.array.push({
        id: 'pokemon/' + res['id'],
        name: res['name'],
        image: res['sprites']['front_default'],
        hp: res['stats'][5]['base_stat']
      });
      store.commit('add', {
        id: res['id'],
        name: res['name'],
        image: res['sprites']['front_default'],
        stats: res['stats']
      });
    }
    else {
      Router.go('/error');
      console.log('err');
    }
  });
};
