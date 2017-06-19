import Vue from 'vue'
import Table from '@/components/Table'

describe('Table.vue', () => {
  it('loader should start with 5%', () => {
    const Constructor = Vue.extend(Table)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.table__loader__opening').textContent)
      .to.equal('5%')
  })
})
