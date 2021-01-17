import { Component } from "react";
import Header from "./HeaderComponent";
import List from "./Jumbotron";
import Row2 from "./Row2";
import CardRow3 from "./Cards";
import Row4 from "./Row4";
import Row5 from "./Row5";
import Row6 from "./FooterComponent";


class Main extends Component {
  render() {
  
    return (
      <div>
        <Header />
        <List/>
        <Row2/>
        <CardRow3/>
        <Row4/>
        <Row5/>
        <Row6 />
      </div>
    );
  }
}

export default (Main);
