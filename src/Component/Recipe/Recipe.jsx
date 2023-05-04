import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaHeart } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import LazyLoad from 'react-lazy-load';


const Recipe = ({ recipe }) => {
    const { name, ingredients, cooking_method, rating, photo} = recipe;
    const [favorite, setFavorite] = useState(false);
    if (favorite) {
        toast("Add favorite");
    }
    return (
        <div className="w-11/12 mx-auto">
            <div className="card card-side bg-base-100 shadow-md mt-10 grid grid-cols-1 md:grid-cols-4 gap-12">
                <figure>
                <LazyLoad height={300} width={400} threshold={0.95}>
                    <img src={photo} alt="Movie" />
                </LazyLoad>
                </figure>
                <div className="card-body col-span-3">
                    <h2 className="card-title mb-4 text-3xl font-b">{name}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="col-span-2">
                            <h5 className='text-lg font-semibold mb-2'>Cooking Method:</h5>
                            <p className='text-gray-400'>{cooking_method}</p>
                        </div>
                        <div className="">
                            <h5 className='text-lg font-semibold mb-2'>Ingredients:</h5>
                            <ul>
                                {
                                    ingredients.map(ingredient => <li className='list-disc text-gray-400'> {ingredient}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="card-actions w-full border-t-2 flex justify-around items-center">
                        <div className=" mt-4 text-center flex gap-3">
                            <p className='text-gray-500'>{rating}</p>
                            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                        </div>
                        <div className=" mt-6 text-center flex gap-6">
                            <p className='text-gray-500'>Favorite</p>
                             <FaHeart onClick={() => setFavorite(!favorite)} className={`font-semibold text-2xl ${favorite ? 'text-red-500' : ''}`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;