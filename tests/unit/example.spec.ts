import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import categories from '@/components/categories.vue'
import { mount } from "@vue/test-utils";
import router from "@/libraries/router";

describe('categories',  () => {
  test('Get categories',  async () => {
   const wrapper = mount(categories, {
       global: {
           plugins: [router]
       }
   })
   await wrapper.trigger('mounted')
    expect(wrapper.vm.init).toBe(false)
    expect(wrapper.vm.categs).not.toBe(undefined)
  })
})

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
