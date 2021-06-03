import App from '../App.vue'
import { mount } from '@vue/test-utils'

describe('App logic test', () => {
	test('Test Sum operation', () => {
		const Wrapper = mount(App)
		let Calculator = Wrapper.vm.Calculator
		Calculator = './components/Calculator.vue'
		expect(Wrapper.vm.Calculator).toBe('./components/Calculator.vue')
	})
})