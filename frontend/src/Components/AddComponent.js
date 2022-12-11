import React, { useState } from "react"
import { Formik } from "formik"
import { NavLink } from "react-router-dom"
import Swal from "sweetalert2"

const AddComponent = () => {
  const [selFile, setSelFile] = useState("")

  const userSubmit = async (values, { resetForm }) => {
    values.image = selFile;
    console.log(values)

    const res = await fetch("http://localhost:5000/comp/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })

    console.log(res.status)
    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "You have registered successfully",
      })
      resetForm()
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      })
    }
  }

  const uploadFile = (e) => {
    const file = e.target.files[0]
    setSelFile(file.name)
    const fd = new FormData()
    fd.append("myfile", file)
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded")
      }
    })
  }

  return (
    <div className="card m-auto mt-5" style={{ width: "60rem" }}>
      <div className="card-title m-auto mt-3">
        <img
          src="https://media.istockphoto.com/id/1425367606/photo/halloween-magician-has-3d.jpg?s=1024x1024&w=is&k=20&c=3eOvShgw4FcDrlP_fy5U7dHUIfsF7Rrg52K-s4LBtB0="
          height={50}
          alt=""
        />
      </div>
      <div className="p-4">
        <h3>Add New React Component</h3>

        <Formik initialValues={{ title: "", descriptiom: "", uploadedBy: "", image: "", code: "" }} onSubmit={userSubmit}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <label>Title</label>
                  <input className="form-control mb-4" name="title" onChange={handleChange} value={values.title} />
                </div>
                <div className="col-md-6">
                  <label>Description</label>
                  <input className="form-control mb-4" name="description" onChange={handleChange} value={values.description} />
                </div>
              </div>

              <label>UploadedBy</label>
              <input className="form-control mb-4" name="uploadedBy" onChange={handleChange} value={values.uploadedBy} />

              <label>Code</label>
              <textarea rows={5} className="form-control mb-4" name="code" onChange={handleChange} value={values.code}></textarea>

              <label>Upload Image</label>
              <input className="form-control mb-4" type="file" onChange={uploadFile} />

              <button type="submit" class="btn btn-primary mb-3">
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default AddComponent
