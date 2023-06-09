import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const Chef = ({ data }) => {
    const { id, photo, name, likes, experience, recipes } = data
    return (
        // chef card 
        <div className="card bg-base-100 shadow-2xl mt-28">
            <figure className="px-10 -mt-20">
                <LazyLoad width={400} threshold={0.95}>
                    <img src={photo} alt="Shoes" className=" w-4/5 rounded-full" />
                </LazyLoad>
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
            {/* View Recipes btn */}
            <Link className="btn w-full" to={`/chef/${id}`}>View Recipes</Link>
        </div>
    );
};

export default Chef;