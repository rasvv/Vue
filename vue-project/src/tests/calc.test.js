import Calculator from '../components/Calculator.vue'
import { mount, createLocalVue } from '@vue/test-utils'

// import Vuex from 'vuex'
// const localVue = createLocalVue()
// localVue.use(Vuex)

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

	// test('Test DivZero operation', () => {
	// 	const Wrapper = mount(Calculator)
	// 	let oper1 = Wrapper.find('input[name="oper1"]')
	// 	oper1.setValue(135)
	// 	let oper2 = Wrapper.find('input[name="oper2"]')
	// 	oper2.setValue(0)
	// 	let sumBtn = Wrapper.find('button[name="/"]')
	// 	sumBtn.trigger('click')

	// 	expect(Wrapper.vm.result).toBe(9)
	// })

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

	test('Test backSpace operation', () => {
		const Wrapper = mount(Calculator)
		let oper1 = Wrapper.find('input[name="oper1"]')
		oper1.setValue(125)
		let btnBack = Wrapper.find('button[name="back"]')
		btnBack.trigger('click')

		expect(Wrapper.vm.oper1).toBe(12)
		// expect(Wrapper.vm.answer).toBe('125%15=8')
	})

	test('Test Fill1 operation', () => {
		const Wrapper = mount(Calculator)
		let picked = Wrapper.vm.picked
		picked = 'Операнд1'
		let btn1 = Wrapper.find('button[name="1"]')
		btn1.trigger('click')
		let btn2 = Wrapper.find('button[name="2"]')
		btn2.trigger('click')
		let btn3 = Wrapper.find('button[name="3"]')
		btn3.trigger('click')
		let btn4 = Wrapper.find('button[name="4"]')
		btn4.trigger('click')
		let btn5 = Wrapper.find('button[name="5"]')
		btn5.trigger('click')
		let btn6 = Wrapper.find('button[name="6"]')
		btn6.trigger('click')
		let btn7 = Wrapper.find('button[name="7"]')
		btn7.trigger('click')
		let btn8 = Wrapper.find('button[name="8"]')
		btn8.trigger('click')				
		let btn9 = Wrapper.find('button[name="9"]')
		btn9.trigger('click')
		let btn0 = Wrapper.find('button[name="0"]')
		btn0.trigger('click')
		expect(Wrapper.vm.oper1).toBe(1234567890)
	})

	test('Test Fill2 operation', () => {
		const Wrapper = mount(Calculator)
		let radioInput = Wrapper.find('input[name="radio2"]')
		radioInput.setChecked()		
		// let picked = Wrapper.vm.picked
		// picked = 'Операнд2'
		let btn1 = Wrapper.find('button[name="1"]')
		btn1.trigger('click')
		let btn2 = Wrapper.find('button[name="2"]')
		btn2.trigger('click')
		let btn3 = Wrapper.find('button[name="3"]')
		btn3.trigger('click')
		let btn4 = Wrapper.find('button[name="4"]')
		btn4.trigger('click')
		let btn5 = Wrapper.find('button[name="5"]')
		btn5.trigger('click')
		let btn6 = Wrapper.find('button[name="6"]')
		btn6.trigger('click')
		let btn7 = Wrapper.find('button[name="7"]')
		btn7.trigger('click')
		let btn8 = Wrapper.find('button[name="8"]')
		btn8.trigger('click')				
		let btn9 = Wrapper.find('button[name="9"]')
		btn9.trigger('click')
		let btn0 = Wrapper.find('button[name="0"]')
		btn0.trigger('click')
		expect(Wrapper.vm.oper2).toBe(1234567890)
	})

	test('Test RadioChange', () => {
		const Wrapper = mount(Calculator)
		let radioInput = Wrapper.find('input[type="radio"]')
		radioInput.setChecked()
		expect(radioInput.element.checked).toBeTruthy()
	})
})