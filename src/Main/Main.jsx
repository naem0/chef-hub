import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Hader from '../share/Hader/Hader';
import Footer from '../share/Footer/Footer';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Hader></Hader>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Main;