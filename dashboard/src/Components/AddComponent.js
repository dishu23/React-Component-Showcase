import React from 'react'
import { Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddComponent = () => {

    const userSubmit = async (values, { resetForm }) => {
        console.log(values);
        

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
                text: 'You have registered successfully'
            })
            resetForm();
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
        <div className="card m-auto mt-5" style={{ width: "30rem" }}>
            <div className='card-title m-auto mt-3'>
                <img src="https://media.istockphoto.com/id/1425367606/photo/halloween-magician-has-3d.jpg?s=1024x1024&w=is&k=20&c=3eOvShgw4FcDrlP_fy5U7dHUIfsF7Rrg52K-s4LBtB0=" height={50} alt="" />
            </div>
            <div className="col-md-8 mx-auto pt-5">

                <h3>Signup form</h3>

                <Formik initialValues={{ username: '', email: '', password: '', age: '' }} onSubmit={userSubmit}>
                    {({ values, handleChange, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <label>Username</label>
                            <input className="form-control mb-4" name="username" onChange={handleChange} value={values.username} />
                            <label>Email</label>
                            <input className="form-control mb-4" name="email" onChange={handleChange} value={values.email} />


                            <label>Password</label>
                            <input type="password" className="form-control mb-4" name="password" onChange={handleChange} value={values.paasword} />
                            <label>Age</label>
                            <input className="form-control mb-4" name="age" onChange={handleChange} value={values.age} />

                            <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>




                        </form>
                    )
                    }

                </Formik>

            </div>

        </div>


    )
}



export default AddComponent;