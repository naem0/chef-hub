import React from 'react';
import { Link } from 'react-router-dom';

const Chef = ({data}) => {
    const{id, photo, name, likes, experience, recipes}= data
    return (
        <div className="card bg-base-100 shadow-2xl mt-28">
            <figure className="px-10 -mt-20">
                <img src= {photo} alt="Shoes" className=" w-4/5 rounded-full" />
            </figure>
            <div className="card-body items-center text-center pb-6">
                <h2 className="card-title">{name}</h2>
                <p className='text-gray-500'> recipes {recipes.length}</p>
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
            <Link className="btn w-full" to={`/${id}`}>View Recipes</Link>
        </div>
    );
};

export default Chef;