import React from 'react';
import Hader from '../Hader/Hader';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Chef from '../Chef/Chef';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Hader></Hader>
            <Banner></Banner>
            <Outlet></Outlet>
            <Chef></Chef>
            <Login></Login>
            <Register></Register>
            <Footer></Footer>
        </div>
    );
};

export default Main;