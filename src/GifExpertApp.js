import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['Los Simpsons']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'X-MEN']);
    // }


    return (
        <div className="container">
            <div className="header">
                <h2 className="animate__animated animate__rotateInDownLeft">GifMarcosApp</h2>
                <p>By Marcos Gomez</p>
            </div>
            <AddCategory setCategories= { setCategories }/>
            <hr />      
            <ol>
                {
                    categories.map( category => ( // con los () ya esta retornando sin poner el "return"
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </div>
    );  
};