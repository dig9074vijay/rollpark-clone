import { Component } from "react";
import Header from "./HeaderComponent";
import List from "./Jumbotron";
import Row2 from "./Row2";
import CardRow3 from "./Cards";


class Main extends Component {
  render() {
  
    return (
      <div>
        <Header />
        <List/>
        <Row2/>
        <CardRow3/>
      </div>
    );
  }
}

export default (Main);
