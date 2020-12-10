import React from 'react';
import { shallow } from 'enzyme';
import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en getGifs.js', () => {
    
    test('debe traer 5 elemenetos', async() => {
        
       const gifs = await getGifs( 'One Punch' );
    
       expect( gifs.length ).toBe( 5 );

    });

    test('debe traer 0 elemenetos', async() => {
        
        const gifs = await getGifs( '' );
     
        expect( gifs.length ).toBe( 0 );
 
     });
       
    
})