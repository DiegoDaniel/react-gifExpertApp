import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';


describe('Pruebas en useFetchGifs', () => {

    test('Debe retornar el valor por defecto', async() => {
        // const { data, loading } = useFetchGifs( 'One Punch' );
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );

        const { data, loading } = result.current;
        //Llamame al waitForN. despues de obtener la data y el loading, para que no se actualice pero no se "desmonte" el componente
        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe( true );

    });

    test('Debe retornar imgs y loading = false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        
        //Llamame al waitForN. ANTES de obtener la data y el loading, para que SI se actualice y no se "desmonte" el componente
        await waitForNextUpdate();
        
        const { data, loading } = result.current;

        //console.log( data, loading );
        expect( data.length ).toBe( 5 );
        expect( loading ).toBe( false );

    })
    
    

})
