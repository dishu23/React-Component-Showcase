import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import JsxParser from "react-jsx-parser"

const View = () => {
  const url = "http://localhost:5000"

  const [components, setComponents] = useState([])
  const [loading, setLoading] = useState(false)
  const [selComp, setSelComp] = useState(null)

  const navigate = useNavigate()
  const getDataFromBackend = async () => {
    setLoading(true)
    const res = await fetch(url + "/comp/getall")
    const data = await res.json()
    setComponents(data)
    setLoading(false)
    console.log(data)
  }
  useEffect(() => {
    getDataFromBackend()
  }, [])

  const viewPanel = () => {
    return (
      <div className="col-md-4 bg-light">
        <div className="card">
          <div className="card-body">
          <i className="fa-solid fa-circle-xmark float-end fa-2x" onClick={e => {
            setSelComp(null);

          }}></i>
            {/* <div className="p-3" style={{ border: "2px solid grey" }}></div> */}
            <JsxParser jsx={`${selComp.code}`} />
            <h4 class="mb-0">{selComp.title}</h4>
            <p class="text-dark mt-2 text-muted">{selComp.uploadedBy}</p>
            <p class="text-dark mt-3">{selComp.description}</p>

            <textarea className="form-control" rows={10} value={selComp.code}></textarea>
          </div>
        </div>
      </div>
    )
  }

  const displayComponents = () => {
    if (!loading) {
      return components.map(({ _id, image, uploadedBy, title, description, code }) => (
        <div class="col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
          <div class="card mt-4">
            <img src={url + "/" + image} class="card-img-top" alt="Component" />
            <div class="card-body">
              <h4 class="mb-0">{title}</h4>
              <p class="text-dark mt-2 text-muted">{uploadedBy}</p>

              <button
                className="btn btn-primary mt-3 float-end"
                onClick={(e) => setSelComp({ _id, image, uploadedBy, title, description, code })}>
                <i class="fas fa-eye"></i> View
              </button>
            </div>
          </div>
        </div>
      ))
    }
  }

  return (
    <div className="browsebackground">
      <div>
        <header className="bg-dark">
          <div className="container py-5">
            <p className="display-1 fw-bold text-white text-center">View React Components</p>
          </div>
        </header>
      </div>

      {/* For Product Cards */}
      <div>
        <section style={{ backgroundcolor: "#eee" }}>
          <div className="row">
            <div className="col-md">
              <div class="col-md-10 mx-auto py-5">
                <div class="row">{displayComponents()}</div>
              </div>
            </div>
            {
              selComp && viewPanel()
            }
          </div>
        </section>
      </div>
    </div>
  )
}

export default View
