import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas en <GifGridItem />', () => {
    
    const url = 'google.com';
    const title = 'Diego PNG';
    const wrapper = shallow( <GifGridItem url={ url } title={ title }/> );
    
    
    test('Debe renderizar correctamente el componente ', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe tener un párrafo con el titulo', () => {
        
        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe( title );


    });

    test('La imagen debe tener source y alt', () => {

        const img = wrapper.find('img');
        //2 formas de ver las props del componente img.
        //console.log(img.props().src );
        //console.log(img.prop('src') );

        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });
    
    test('debe tener la clase fadeIn', () => {
        
        const className = 'animate__fadeIn';

        const div = wrapper.find('div');

        expect(div.prop('className')).toContain( className );

    })
    
    
    
})
