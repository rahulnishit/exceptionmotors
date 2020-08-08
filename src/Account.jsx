import React from "react";
import Card from "./Card";
import Sdata1 from "./Sdata1";
const Account = (props) => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Start Your Jorney With Anyone!!!</h1>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {Sdata1.map((val, ind) => {
                  return (
                    <Card
                      key={ind}
                      imgsrc={val.imgsrc}
                      name={val.name}
                      link={val.link}
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
export default Account;
