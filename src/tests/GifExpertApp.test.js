import React from 'react';
import { shallow } from 'enzyme';

import GifExpertApp from '../GifExpertApp';


describe('Pruebas en <GifExpertApp />', () => {
    

    test('should match snapshot', () => {
        
        const wrapper = shallow(<GifExpertApp />);

        expect( wrapper ).toMatchSnapshot();

    });

    test('should show categories list', () => {
        
        const categories = ['One punch', 'Goku'];
        
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
    
    
})
