import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const Recipes = () => {
    const chefData = useLoaderData()
    const { name, bio, id , photo, likes, experience, recipes} = chefData; 
    return (
        <div className=''>
            <div className="card card-side bg-base-100 shadow-xl mt-10 grid grid-cols-3 gap-12">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="card-body col-span-2 p-4 m-8">
                    <h2 className="card-title mb-4 text-4xl font-b">{name}</h2>
                    <p>{bio}</p>
                    <p className='text-gray-600 font-semibold'> recipes { recipes.length}</p>
                    <div className="card-actions w-full border-t-2 flex justify-between ">
                        <div className=" mt-4">
                            <p className='text-gray-400'>Experience</p>
                            <h6 className='font-semibold'>{experience} Yers</h6>
                        </div>
                        <div className=" mt-4">
                            <p className='text-gray-400'>Likes</p>
                            <h6 className=' font-semibold'>{likes}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className='text-4xl font-medium text-center mt-16'>Recipes: {recipes.length}</h1>
                {
                    recipes.map(recipe=><Recipe recipe = {recipe} key = {recipe.id}></Recipe>)
                }
            </div>
        </div>
    );
};

export default Recipes;