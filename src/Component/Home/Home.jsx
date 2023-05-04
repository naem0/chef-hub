import React from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import { useLoaderData } from 'react-router-dom';
import HomeMadeFood from '../HomeMadeFood/HomeMadeFood';
import Heaven from '../Heaven/Heaven';

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <Heaven></Heaven>
            <div className="">
                <h1 className='text-center text-4xl font-bold mb-12'>Enjoy home made food</h1>
                <HomeMadeFood></HomeMadeFood>
            </div>
        </div>
    );
};

export default Home;