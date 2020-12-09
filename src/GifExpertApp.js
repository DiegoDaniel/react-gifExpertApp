import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState( ['One Punch'] );

  // const handleAdd = () => {
  //   //Esta forma no da errores, pero me gustó mas la del profesor.
  //   /*setCategories( categories.concat('Text') );*/
    
  //   //El spread es para 'Extraer TODOS los valores del array'.
  //   /*setCategories( [...categories, 'HunterXHunter'] );*/

  //   //Ademas, el set tiene como callback el ESTADO ANTERIOR: (Esto va a servir)
  //   setCategories( catsPrev => [...catsPrev, 'HunterXHunter'] );

  // }

  return (
      <>
        <h2>GifExpertApp</h2>   
        <AddCategory 
          setCategories={ setCategories }/>
        <hr />
        <ol>
          { categories.map( category => 
              <GifGrid
                category={ category }
                key={ category } />
          )}
        </ol>
      </>
  )
}

export default GifExpertApp;
