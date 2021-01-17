
import React, {  useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CardRow3 = () => {
    useEffect(() => {
        AOS.init({duration:3000});
      },[])
    return(
    <div>
        <div>
        <img data-aos="slide-down" src="./c1.png" alt="Card1" width="50%"/>
         <img  data-aos="slide-up" src="./c2.png" alt="Card2" width="50%"/>
        </div>
        <div>
        <img data-aos="slide-down" src="./c3.png" alt="Card3" width="50%"/>
         <img  data-aos="slide-up"  src="./c4.png" alt="Card4" width="50%"/>
        </div>
        
         
      </div>
      );
        
    
}

export default CardRow3;