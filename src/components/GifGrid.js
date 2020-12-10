import React from 'react' //, { useEffect, useState }
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ( { category } ) => {
            //renombro
    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            { loading && <p className="animate__animated animate__flash">Cargando...</p>}
            <div className="card-grid">
                { 
                images.map( ( img ) => {
                    return <GifGridItem 
                        key={ img.id }
                        //Se puede hacer spread de CADA UNO de los valores de img
                        //Para enviar al componente, en lugar de hacer id={img.id},, title={img.title},
                        //El spread devuelve todos los valores del objeto.
                        { ...img } />;
                })
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}