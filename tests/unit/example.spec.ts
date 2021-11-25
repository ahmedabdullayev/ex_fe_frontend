import {flushPromises, shallowMount} from '@vue/test-utils'
import store from '@/libraries/store'
import categories from '@/components/categories.vue'
import router from "@/libraries/router";

store.dispatch = jest.fn(() => Promise.resolve())
const wrapper =  shallowMount(categories, {
    global: {
        plugins: [router, store],
        mocks: {
            computed:{
                categories:
                    [
                        {
                            name: "Football",
                            id: 1
                        },
                        {
                            name: "Test",
                            id: 2
                        }
                    ]
            },
            $store: store,
            $t: jest.fn()
        }
    }
})
describe('categories',  () => {
    test('Get categories',  async () => {
        // await wrapper.trigger('mounted')
        //    await wrapper.trigger('mounted')
        //    await wrapper.vm.$nextTick()
        await wrapper.vm.$nextTick()
        expect(wrapper.html()).toContain("Football")
        //    const body = {id: 1, name: "Cars"}
        //    wrapper.vm.$store.commit("categories/setAllCategories",body)
        //    await wrapper.vm.$nextTick()
        //    expect(wrapper.vm.categories).toStrictEqual(body)
        //    await flushPromises()
        //    // expect(wrapper.text()).toMatch("Cars")
        //    expect(wrapper.vm.categories).not.toBe(null)

    })
    test("routs", async () => {
        expect(wrapper.find(".rout").exists()).toBe(true)
    })
})

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })
