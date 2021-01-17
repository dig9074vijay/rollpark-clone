import React, { useEffect} from "react";
import Header from "./HeaderComponent";
import List from "./Jumbotron";
import Row2 from "./Row2";
import CardRow3 from "./Cards";
import Row4 from "./Row4";
import Row5 from "./Row5";
import Row6 from "./FooterComponent";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Main = () => {
 
    useEffect(() => {
      AOS.init({duration:3000});
    },[])
  
    return (
      <div>
        <Header />
        <List/>
        <Row2/>
        <CardRow3/>
        <div data-aos="fade-up">
        <Row4/>
        </div>
        <div data-aos="fade-up">
        <Row5/>
        </div>
        <Row6 />
      </div>
    );
  
}

export default (Main);
