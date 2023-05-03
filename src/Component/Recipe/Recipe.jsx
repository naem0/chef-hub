import React, { useState } from 'react';

const Recipe = ({recipe}) => {
    const {name, ingredients, cooking_method, rating}=recipe;
    const [favorite, setFavorite] = useState(false);
    if (favorite) {
        alert('favorit aca')
    }
    return (
        <div className="w-11/12 mx-auto">
            <div className="card card-side bg-base-100 shadow-md mt-10 grid grid-cols-4 gap-12">
                <figure><img src="" alt="Movie" /></figure>
                <div className="card-body col-span-3">
                    <h2 className="card-title mb-4 text-3xl font-b">{name}</h2>
                    <div className="grid grid-cols-3 gap-8">
                        <div className="col-span-2">
                            <h5 className='text-lg font-semibold mb-2'>Cooking Method:</h5>
                            <p className='text-gray-400'>{cooking_method}</p>
                        </div>
                        <div className="">
                            <h5 className='text-lg font-semibold mb-2'>Ingredients:</h5>
                            <ul>
                                {
                                    ingredients.map(ingredient=> <li className='list-disc text-gray-400'> {ingredient}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="card-actions w-full border-t-2 flex justify-around">
                        <div className=" mt-4">
                            <p className='text-gray-400'>Rating:</p>
                            <h6 className='font-semibold'>{rating}</h6>
                        </div>
                        <div className=" mt-4">
                            <p className='text-gray-400'>Likes</p>
                            <h6 onClick={()=>setFavorite(!favorite)} className={ `font-semibold ${favorite ? 'text-gray-400': ''}`}>favorite</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;