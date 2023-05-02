import React from 'react';
import Hader from '../Hader/Hader';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Hader></Hader>
            <Outlet></Outlet>
            <Register></Register>
            <Footer></Footer>
        </div>
    );
};

export default Main;