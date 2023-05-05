import React from 'react';

import Banner from './Banner/Banner';
import Chefs from './Chefs/Chefs';
import Heaven from './Heaven/Heaven';
import HomeMadeFood from './HomeMadeFood/HomeMadeFood';
import { useNavigation } from 'react-router-dom';
const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            {/* exta section  */}
            <Heaven></Heaven>
            <div className="">
                <h1 className='text-center text-4xl font-bold mb-12'>Enjoy home made food</h1>
                <HomeMadeFood></HomeMadeFood>
            </div>
        </div>
    );
};

export default Home;