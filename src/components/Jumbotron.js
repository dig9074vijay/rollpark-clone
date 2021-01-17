

import React from "react";
import {Jumbotron} from "reactstrap";

const List = () => {
    return(
        <div>
    <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-4">
              <h3 style={{ fontFamily: "Comfortaa", color: "black" }}>Designed for you</h3>
              </div>  
              <div className="col-12 col-sm-4">
                <br/>
                <ul className="list-unstyled left">
                  <li>-Roll it outand instantly park</li>
                  <li>-Re-use it on multiple sites</li>
                  <li>-Event parking, Overflow, Vehicle Storage</li>
                  <li>-Daily temporary use <i style={{color:"green"}}>1-3 years</i></li>
                  <li>-Daily permanent use <i style={{color:"green"}}>1-3 years</i></li>
                </ul>
              </div>
              <div className="col-12 col-sm-4">
                <img className="shadow" src="./rollpark.png" alt="Rollpark" width="300" height="300"/>
              </div>
            
          </div>
        </div>
      </Jumbotron>
      </div>
      );
        
    
}

export default List;