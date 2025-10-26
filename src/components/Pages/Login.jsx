import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const {signIn} = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value
    const password = form.password.value

    signIn(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage)
    })
  }
  return (
    <div className="flex justify-center items-center pt-15">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-8">
        <h2 className="text-center text-2xl font-semibold">Login your account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4 text-secondary">Login</button>
            <p className="text-xs font-normal text-center pt-5">Dont’t Have An Account ? <Link to={"/auth/register"}>Register</Link> </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
