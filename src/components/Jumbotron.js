

import React, {  useEffect} from "react";
import {Jumbotron} from "reactstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

const List = () => {
    useEffect(() => {
        AOS.init({duration:3000});
      },[])
    return(
        <div>
    <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-4">
              <h3 style={{ fontFamily: "Comfortaa", color: "black" }} data-aos="fade-up">Designed for you</h3>
              </div>  
              <div className="col-12 col-sm-4">
                <br/>
                <ul className="list-unstyled left">
                  <li data-aos="slide-right">-Roll it outand instantly park</li>
                  <li data-aos="slide-left">-Re-use it on multiple sites</li>
                  <li data-aos="slide-right">-Event parking, Overflow, Vehicle Storage</li>
                  <li data-aos="slide-left">-Daily temporary use <i style={{color:"green"}}>1-3 years</i></li>
                  <li data-aos="slide-right">-Daily permanent use <i style={{color:"green"}}>1-3 years</i></li>
                </ul>
              </div>
              <div className="col-12 col-sm-4" data-aos="fade-in">
                <img className="shadow" src="./rollpark.png" alt="Rollpark" width="300" height="300"/>
              </div>
            
          </div>
        </div>
      </Jumbotron>
      </div>
      );
        
    
}

export default List;