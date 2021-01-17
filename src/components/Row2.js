
import React from "react";
import {Jumbotron} from "reactstrap";

const Row2 = () => {
    return(
        <div>
    <Jumbotron>
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <h3 className="left" style={{ fontFamily: "Comfortaa", color: "black" }}>Over 1 million cars parked</h3>
              </div>  
              <div className="col-12 ">
                <br/>
               <img src="./row2.png" alt="row2" width="100%"/>
              </div>
            
            
          </div>
        </div>
      </Jumbotron>
      </div>
      );
        
    
}

export default Row2;