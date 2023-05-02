import React from 'react';
import Chef from '../Chef/Chef';
import { useLoaderData } from 'react-router-dom';

const Chefs = () => {
    const datas = useLoaderData();
    return (
        <div className='grid grid-cols-4 gap-12'>
            {
                datas.map(data=> <Chef key={data.id} data={data} ></Chef>)
            }
            <h4>hello {datas.length}</h4>
        </div>
    );
};

export default Chefs;