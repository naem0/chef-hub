import React from 'react';

const Chef = () => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://media.istockphoto.com/id/1079893444/photo/grilled-steaks-and-vegetables-on-white-background.jpg?s=612x612&w=0&k=20&c=h1AeikJAhGY0KK7rinCdX_8YzYE8vRzXFwJJAJPw_uQ=" alt="Shoes" className="rounded-xl w-2/3" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p className='text-gray-400'> recipes</p>
                <div className="card-actions w-full border-t-2 flex justify-between ">
                    <div className=" mt-4">
                        <p className='text-gray-400'>experience</p>
                        <h6 className='font-semibold'>Experience</h6>
                    </div>
                    <div className=" mt-4">
                        <p className='text-gray-400'>Likes</p>
                        <h6 className=' font-semibold'>Likes</h6>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary w-full">Buy Now</button>
        </div>
    );
};

export default Chef;