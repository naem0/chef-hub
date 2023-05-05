import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Authprovider';
import { Page } from '@react-pdf/renderer';

const Login = () => {
    const { signIn, googleSignIn, githabsignIn, loading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    if (loading) {
        <progress className="progress w-56"></progress>
    }

    const hendalLoging = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        signIn(email, password)
            .then(result => {
                const createdUser = result.user;
                navigate(from)
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }
    const hendalGithabLogin =()=>{
        githabsignIn()
        .then((result) => {
            const user = result.user;
            console.log(user)
            navigate(from)
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
            setError(errorMessage)
        });
    }
    const hendalgoogleLogin =()=>{
        googleSignIn()
        .then((result) => {
            const user = result.user;
            navigate(from)
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
        });
    }
    return (
        // loading Page 
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col w-2/3">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-6">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                        <form onSubmit={hendalLoging} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to={'/register'} className="label-text-alt link link-hover">New to tha Chef Hantar? Go to Register. </Link>
                                </label>
                            </div>
                            <p><small className='text-red-400'>{error}</small></p>
                            <div className="form-control mt-6">
                                <button className="btn">Login</button>
                            </div>
                        </form>
                        <hr className='border-t-2' />
                        <p className='text-center -m-4 font-semibold'>or</p>
                        <div className="p-8 flex justify-between">
                            <button className='btn w-5/12' onClick={hendalgoogleLogin}><FaGoogle className='me-3' /> google</button>
                            <button className='btn w-5/12' onClick={hendalGithabLogin}><FaGithub className='me-3'></FaGithub> githab</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;