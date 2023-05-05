import React, { } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Chef from './Chef/Chef';

const Chefs = () => {
    // chef continar 
    const navigation = useNavigation();
    console.log(navigation.state)
    if (navigation.state == 'loading') {
        return <progress className="progress w-56 mx-auto"></progress>
    }
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