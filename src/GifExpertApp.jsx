// Para acceder a las funcionalidades de React (hooks,etc)
import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
const [ categories, setCategories ] = useState( ['Mustang'] );    
 // console.log(categories); //* Actualiza las (categories) ahi se encuentra lo que hemos insertado con onAddCategory


const onAddCategory = (newCategory) => {
  // setCategories(categories => [...categories, 'Valorant']);
  if(categories.includes(newCategory)) return;
  setCategories([newCategory, ...categories]);
};

  return (
    <>
    {/* Titulo */}
    <h1>GifExpertApp</h1>


    {/* Input */}
    < AddCategory onNewCategory = {value => onAddCategory(value)} />


    {/* Listado de Gif */}
    { categories.map( category => (
      <GifGrid key={category} category={ category }/>
      ))
    }
    </>
    )
}