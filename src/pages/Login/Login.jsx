import React from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineKey } from "react-icons/ai";
import { BsBoxArrowLeft } from "react-icons/bs";
import { useSignIn } from "react-auth-kit";
import { useFormik } from "formik";

const Login = () => {
  const signIn = useSignIn();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);

      try {
        // fetch data
        // ...const { token, expiresIn, authUserState} = fetch(method:post,username,password);
        const { token, expiresIn, authUserState } = {
          token: "123asd",
          expiresIn: "12",
          authUserState: "state",
        };

        if (
          signIn({
            token: token,
            expiresIn: expiresIn,
            tokenType: "Bearer",
            authState: authUserState,
          })
        ) {
          // Redirect or do-something
          console.log("redirect");
          navigate('/admin');
        } else {
          //Throw error
          console.log("error");
        }
      } catch (error) {}
    },
  });

  return (
    <div className="login-wrapper">
      <Link className="arrow-back" to="/">
        <BsBoxArrowLeft size={35} />
      </Link>
      <div className="row justify-content-center align-items-center w-100 h-100">
        <div className="col-10 col-md-6 d-flex justify-content-center">
          <div className="login-box">
            <form className="login-form" onSubmit={formik.handleSubmit}>
              <h1 className="form-title">Login</h1>

              <div className="input-box">
                <AiOutlineUser size={25} />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter username"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
              </div>
              <div className="input-box">
                <AiOutlineKey size={25} />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </div>
              <button type="submit" className="btn">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
