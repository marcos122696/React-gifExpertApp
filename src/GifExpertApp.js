import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ( { defaultCategories=[] } ) =>{

    // const [categories, setCategories] = useState(['Los Simpsons']);
    const [categories, setCategories] = useState( defaultCategories );

    return (
        <div className="container">
            <div className="header">
                <h2 className="animate__animated animate__rotateInDownLeft">GifExpertApp</h2>
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