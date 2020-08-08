import React from "react";
import { NavLink } from "react-router-dom";
const Cardt = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img
            src={props.imgsrc}
            className="card-img-top"
            alt="hello"
            height="200"
            weight="300"
          />
          <div className="card-body">
            <h5 className="card-title font-weight-bold ">{props.name}</h5>
            <p className="card-text">
              {props.spl}
              <br />
              {props.fav}
            </p>
            <NavLink to="/contact" className="btn btn-primary">
              {props.btn}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cardt;
