
import React, {useEffect} from "react";
import {Jumbotron} from "reactstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Row2 = () => {
    useEffect(() => {
        AOS.init({duration:3000});
      },[])
    return(
        <div>
    <Jumbotron>
        <div className="container" data-aos="fade-up">
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