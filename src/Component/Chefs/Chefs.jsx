import React from 'react';
import Chef from '../Chef/Chef';
import { useLoaderData } from 'react-router-dom';

const Chefs = () => {
    const datas = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {
                datas.map(data=> <Chef key={data.id} data={data} ></Chef>)
            }
        </div>
    );
};

export default Chefs;