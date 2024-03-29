import React from "react";
import { Consumer } from "../CONTEXT";
import RECCOMENDATIONCARD from "./RECCOMENDATIONCARD";

function RECCOMENDATION() {
  return (
    <Consumer>
      {(value) => {
        const { details } = value;
        console.log(details);
        return (
          <div className="container-fluid my-5">
            <div className="row text-center py-5 d-flex align-items-center justify-content-center flex-nowrap overflow-auto scrollbar">
              {details.map((detail) => (
                <RECCOMENDATIONCARD detail={detail} />
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default RECCOMENDATION;
