import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Authprovider';


const Register = () => {
    const {createUser, updatUser, googleSignIn, githabsignIn}= useContext(AuthContext);
    const [error, setError] = useState('');
    
    const hendalRegister= event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        setError('')
        if (password.length < 6) {
            setError('password atlist  6 cractir');
            return
        }
        createUser(email,password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
        })
        .catch(error => {
            console.log(error);
            setError(error.message)
        });
        updatUser(name, photo)
        .then(result => {
            const updateProfile = result.user;
            console.log(updateProfile);
        })
        .catch(error => {
            console.log(error);
            setError(error.message)
        });
    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col w-4/5">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-6">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={hendalRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <p><small className='text-red-400'>{error}</small></p>
                        <div className="form-control mt-6">
                            <button className="btn">Register</button>
                        </div>
                    </form>
                    <button onClick={googleSignIn}>google</button>
                    <button onClick={githabsignIn}>githab</button>
                </div>
            </div>
        </div>
    );
};

export default Register;