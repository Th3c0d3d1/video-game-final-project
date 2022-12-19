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
        <p>Who we are and what we do.</p>
      </div>
      <div className="card-deck d-flex">
        <div className="card">
          <img
            className="card-img-top"
            src="https://sportshub.cbsistatic.com/i/2022/02/05/4340a391-6f73-4875-861c-004f1da44bd6/one-punch-man-garou.jpg"
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Steven</h5>
            <p className="card-text">
              10th Degree Dan Coral Poke Belt <br />
              Journeyed 4 yrs with the monks in Northern South China.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="https://assets-prd.ignimgs.com/2022/01/26/team-fortress-2-button-1643168687556.jpg"
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Luis</h5>
            <p className="card-text">
            Ph.D in Breathing <br />
            Worked several years in Desktop Support now looking to expand my field in Tech with Coding.
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
             Boost King <br/>
             Before I took this class I knew nothing about coding. Now I know things!
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