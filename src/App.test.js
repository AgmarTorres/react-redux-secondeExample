import React from 'react';
import App from './App'
import { shallow , mount} from 'enzyme';

describe('Learning', () => {
    
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<App />)
        console.log(wrapper.debug())
    })


    test("render h1 with text ", () => {
        expect(wrapper.find("h1").text()).toContain("This is counter app")
    })

})