import { Component } from "react";
import Header from "./HeaderComponent";

import { Switch,  withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Main extends Component {
  render() {
  
    return (
      <div>
        <Header />
        <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch location={this.props.location}>
                  
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        
      </div>
    );
  }
}

export default withRouter(Main);
