import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en GifGrid', () => {
    
    const category = 'Goku';
    
    test('should match snapshot', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar items cuando se carga el useFetch', () => {
        
        const gifs = [{
            id: '123',
            url: 'https://localhost/todo.png',
            title: 'Local Host'
        },{
            id: 'abc',
            url: 'https://localhost/todo.png',
            title: 'Local Host'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={category}/>);

        //expect( wrapper ).toMatchSnapshot();
        //No debería existir el <p></p> porque "loading" es false.
        expect( wrapper.find('p').exists()).toBe( false );

        //Tambien podemos esperar que se haya renderizado el componente GifGridItem
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    });
    
    
})
