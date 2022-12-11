import React from 'react'
import { Formik } from 'formik';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Login = () => {

    const navigate = useNavigate();

  const userLogin = async (values, { resetForm }) => {
    console.log(values);
    // resetForm({ value: '' });

    const res = await fetch('http://localhost:5000/user/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    });

    console.log(res.status);
    if (res.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Login Success'
      })
      const data = await res.json();
      sessionStorage.setItem('user', JSON.stringify(data))
      navigate('/AddComponent');
      // resetForm();
    } else if (res.status === 401) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Login Failed'
      })
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
    }
    }
    return (
        <div className="card m-auto mt-5" style={{ width: "30rem" }} >
            <div className='card-title m-auto mt-3'>
                <img src="" alt="" />
            </div>
            <div className="card-body">

                <Formik initialValues={{ email: '', password: '' }} onSubmit={userLogin}>
                    {
                        ({ values, handleChange, handleSubmit }) => (
                            <form onSubmit={handleSubmit}>

                                <div class="form-outline mb-4">
                                    <input type="email" id="form2Example1" class="form-control" />
                                    <label class="form-label" for="form2Example1">Email address</label>
                                </div>


                                <div class="form-outline mb-4">
                                    <input type="password" id="form2Example2" class="form-control" />
                                    <label class="form-label" for="form2Example2">Password</label>
                                </div>


                                <div class="row mb-4">
                                    <div class="col d-flex justify-content-center">

                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="form2Example34" checked />
                                            <label class="form-check-label" for="form2Example34"> Remember me </label>
                                        </div>
                                    </div>

                                    <div class="col">

                                        <a href="#!">Forgot password?</a>
                                    </div>
                                </div>


                                <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>


                                <div class="text-center">
                                    <p>Not a member? <Link to="/register">Register</Link></p>
                                    <p>or sign up with:</p>
                                    <button type="button" class="btn btn-secondary btn-floating mx-1">
                                        <i class="fab fa-facebook-f"></i>
                                    </button>

                                    <button type="button" class="btn btn-secondary btn-floating mx-1">
                                        <i class="fab fa-google"></i>
                                    </button>

                                    <button type="button" class="btn btn-secondary btn-floating mx-1">
                                        <i class="fab fa-twitter"></i>
                                    </button>

                                    <button type="button" class="btn btn-secondary btn-floating mx-1">
                                        <i class="fab fa-github"></i>
                                    </button>
                                </div>
                            </form>

                        )
                    }
                </Formik>

            </div>
        </div>
    )
}

export default Login