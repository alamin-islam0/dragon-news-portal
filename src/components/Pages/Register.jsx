import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
  const {createUser, setUser} = use(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({name, photo, email, password})
        createUser(email, password)
        .then(result =>{
          const user = result.user;
          // console.log(user)
          setUser(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)
        })
    }
    return (
        <div className="flex justify-center items-center pt-15">
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-8">
                <h2 className="text-center text-2xl font-semibold">Register your account</h2>
                <form onSubmit={handleRegister} className="card-body">
                  <fieldset className="fieldset">
                    <label className="label">Your Name</label>
                    <input name='name' type="text" className="input" placeholder="Enter your name" />
                    <label className="label">Photo URL</label>
                    <input name='photo' type="text" className="input" placeholder="Enter your password" />
                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Enter your email address" />
                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Enter your password" />

                    <div>
                      <a className="link link-hover">Forgot password?</a>
                    </div>
                    <button type='submit' className="btn btn-neutral mt-4 text-secondary">Register</button>
                    <p className="text-xs font-normal text-center pt-5">Already have an account? <Link to={"/auth/login"}> Login</Link> </p>
                  </fieldset>
                </form>
              </div>
            </div>
    );
};

export default Register;