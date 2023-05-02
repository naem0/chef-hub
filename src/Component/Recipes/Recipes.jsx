import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipes = () => {
    const recipes = useLoaderData()
    console.log(recipes)
    return (
        <div>

            Recipes caming soon....
        </div>
    );
};

export default Recipes;