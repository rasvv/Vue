import TestComponent from '../components/TestComponent'
import { mount } from '@vue/test-utils'

describe('TestComponent', () => {
	test('Content of TestComponent', () =>{
		const Wrapper = mount(TestComponent, {
			propsData: {
				message: 'Hello from test!'
			}
		})
		expect(Wrapper.text()).toEqual('The message is: Hello from test!')
	})
})