import React, { useState } from "react";
import Header from "./Header";

const Add = () => {
  const [input, changeInput] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rate: "",
    count: "" 
  });

  const readValue = (e) => {
    changeInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitValue = () => {
    console.log(input)
  };
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={input.title}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  value={input.price}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  value={input.description}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Category
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  value={input.category}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Image
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="image"
                  value={input.image}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Rating
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="rate"
                  value={input.rate}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Count
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="count"
                  value={input.count}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={submitValue}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
