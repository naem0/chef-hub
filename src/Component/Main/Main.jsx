import React from 'react';
import Hader from '../Hader/Hader';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Hader></Hader>
            <Outlet></Outlet>
            <Register></Register>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Main;