import { Component } from "react";
import Header from "./HeaderComponent";
import List from "./Jumbotron";
import Row2 from "./Row2"


class Main extends Component {
  render() {
  
    return (
      <div>
        <Header />
        <List/>
        <Row2/>
      </div>
    );
  }
}

export default (Main);
