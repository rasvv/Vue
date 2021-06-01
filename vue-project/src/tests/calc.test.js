import Calculator from '../components/Calculator.vue'
import { mount } from '@vue/test-utils'

describe('Calc logic test', () => {
	test('Test Sum operation', () => {
		const Wrapper = mount(Calculator)
		let oper1 = Wrapper.find('input[name="oper1"]')
		oper1.setValue(125)
		let oper2 = Wrapper.find('input[name="oper2"]')
		oper2.setValue(15)
		let sumBtn = Wrapper.find('button[name="+"]')
		sumBtn.trigger('click')

		expect(Wrapper.vm.result).toBe(140)
	})
	test('Test Diff operation', () => {
		const Wrapper = mount(Calculator)
		let oper1 = Wrapper.find('input[name="oper1"]')
		oper1.setValue(125)
		let oper2 = Wrapper.find('input[name="oper2"]')
		oper2.setValue(15)
		let sumBtn = Wrapper.find('button[name="-"]')
		sumBtn.trigger('click')

		expect(Wrapper.vm.result).toBe(110)
	})
	test('Test Div operation', () => {
		const Wrapper = mount(Calculator)
		let oper1 = Wrapper.find('input[name="oper1"]')
		oper1.setValue(135)
		let oper2 = Wrapper.find('input[name="oper2"]')
		oper2.setValue(15)
		let sumBtn = Wrapper.find('button[name="/"]')
		sumBtn.trigger('click')

		expect(Wrapper.vm.result).toBe(9)
	})
	test('Test Mult operation', () => {
		const Wrapper = mount(Calculator)
		let oper1 = Wrapper.find('input[name="oper1"]')
		oper1.setValue(125)
		let oper2 = Wrapper.find('input[name="oper2"]')
		oper2.setValue(15)
		let sumBtn = Wrapper.find('button[name="*"]')
		sumBtn.trigger('click')

		expect(Wrapper.vm.result).toBe(1875)
	})
	test('Test Deg operation', () => {
		const Wrapper = mount(Calculator)
		let oper1 = Wrapper.find('input[name="oper1"]')
		oper1.setValue(2)
		let oper2 = Wrapper.find('input[name="oper2"]')
		oper2.setValue(4)
		let sumBtn = Wrapper.find('button[name="^"]')
		sumBtn.trigger('click')

		expect(Wrapper.vm.result).toBe(16)
	})
	test('Test WholeDiv operation', () => {
		const Wrapper = mount(Calculator)
		let oper1 = Wrapper.find('input[name="oper1"]')
		oper1.setValue(125)
		let oper2 = Wrapper.find('input[name="oper2"]')
		oper2.setValue(15)
		let sumBtn = Wrapper.find('button[name="%"]')
		sumBtn.trigger('click')

		expect(Wrapper.vm.result).toBe(8)
		expect(Wrapper.vm.answer).toBe('125%15=8')
	})
	test('Test Fill operation', () => {
		const Wrapper = mount(Calculator)
		let picked = Wrapper.vm.picked
		picked = 'Операнд1'
		let oper1 = Wrapper.vm.oper1
		oper1 = 12
		// let oper = Wrapper.vm.oper
		let sumBtn = Wrapper.find('button[name="5"]')
		sumBtn.trigger('click')

		expect(Wrapper.vm.oper1).toBe('125')
	})

})