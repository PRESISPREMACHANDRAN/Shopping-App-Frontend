import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

const ViewAll = () => {

  const [shoppingData, changeShoppingData] = useState([]);

       const fetchData = () => {
        axios.get("https://fakestoreapi.com/products").then(

        (response)=>{
          changeShoppingData(response.data);
        }

        );

       }


useEffect( ()=>{fetchData()} ,[] )



  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              {shoppingData.map((value, index) => {
                return (
                  <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex allign-items-stretch">
                    <div class="card">
                      <img src={value.image} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">{value.title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">
                          {value.category}
                        </h6>
                        <p class="card-text">${value.price}</p>

                        <p class="card-text">Rating: {value.rating.rate}</p>
                        <p class="card-text">Count: {value.rating.count}</p>
                        <p class="card-text">{value.description}</p>
                        <a href="#" class="btn btn-primary">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewAll;
