import React from "react";
import Cardt from "./Cardt";

import Sdata from "./Sdata";
const Service = (props) => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our services</h1>
        <h2 className="text-center">Get Investment Ideas From Our Experts</h2>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {Sdata.map((val, ind) => {
                  return (
                    <Cardt
                      key={ind}
                      imgsrc={val.imgsrc}
                      name={val.name}
                      spl={val.spl}
                      fav={val.fav}
                      btn={val.btn}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
