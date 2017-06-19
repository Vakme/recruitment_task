import Vue from 'vue'
import Pokemon from '@/components/Pokemon'

describe('Pokemon.vue', () => {
  it('entering the page with pokemon without loading data on main page should show a message', () => {
    const Constructor = Vue.extend(Pokemon)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.pokemon__description').textContent)
      .to.equal('Sorry, this pokemon is not in our base or might not have been downloaded yet!')
  })
})
