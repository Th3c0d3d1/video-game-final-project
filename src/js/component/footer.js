import React, { Component } from "react";
import "../../styles/footer.css";

export const Footer = () => (
  <body className="d-flex flex-column">
    <footer className="flex-shrink-0 py-4 bg-dark text-white-50 mt-auto">
      <div class="container">
        <div class="row">
          <div class="col-sm-10">
            <h3>Blue Comet Gaming</h3>
          </div>
          <div class="col-sm-2">
            <a href="#" class="link-secondary text-decoration-none">
              <h5>About Us</h5>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </body>
);
