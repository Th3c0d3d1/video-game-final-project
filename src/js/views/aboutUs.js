import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/aboutUs.css";

export const AboutUs = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <br />
      <div className="about-section text-center">
        <h1>About Us</h1>
        <p>Who we are.</p>
      </div>
      <div className="card-deck d-flex">
        <div className="card">
          <img
            className="card-img-top"
            src="https://www.santosfood.com/wp-content/uploads/2020/01/img-7.jpg"
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Steven</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://www.traderjoes.com/content/dam/trjo/products/m20701/78963.png"
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Luis</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://gamenewsplus.net/wp-content/uploads/2021/02/pokemon-diamond-pearl-remake-to-be-announced-this-week-400x300.jpg"
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Jacob</h5>
            <p className="card-text">
              Before I took this class I knew nothing about coding. Now I know some things! That's what I call improvement! My favorite video game ever is Pokémon Diamond and Pearl.
            </p>
          </div>
        </div>
      </div>
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};

