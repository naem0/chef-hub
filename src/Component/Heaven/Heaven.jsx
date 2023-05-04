import React from 'react';

const Heaven = () => {
    return (
        <div>
            <div className=" mt-16">
                <div className=' lg:grid grid-cols-2 gap-6 pb-28'>
                    <div className=' mb-6'>
                        <img className=' ps-10 h-96' src="https://media.istockphoto.com/id/1323443868/photo/chickpea-hummus-bowl-closeup-with-pita-flatbread-dipping-isolated-on-white.jpg?s=612x612&w=0&k=20&c=L97au80MCZwcARYCy_VOQaQUPz2lRqIUjtb6PT6_R3o=" alt="" />
                        <img className=' -mt-20  h-72' src="https://media.istockphoto.com/id/635675852/photo/pizza-on-white-background.jpg?s=612x612&w=0&k=20&c=3z6N8hYH4yNRK8EbGJ4Pt7vszNw7dL_l8QwnNUz2Z_o=" alt="" srcset="" />

                    </div>
                    <div className=' mt-20 mx-6'>
                        <h1 className=' text-6xl color pb-7'>Between Heaven & Earth</h1>
                        <hr className=' w-40'></hr>
                        <p className=' pb-5 pt-8 text-1xl'>The character and philosophy of our type of cuisine, which follows the ancestral technique of using different types of firewood, fire,charcoal and the scented trace of the smoke, inherently results in a limitation on the number of diners that we can accommodate without sacrificing our essence.
                        </p>
                        <p className='text-3xl pb-8'>Whisper to us about your feelings, and we will prepare what you need now.
                        </p>

                        <button className='btn px-8 py-4 '>DISCOVER MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Heaven;