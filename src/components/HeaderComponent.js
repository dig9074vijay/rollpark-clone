import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    this.toggleModal();
    alert(
      "Username: " +
        this.username.value +
        " Password: " +
        this.password.value +
        " Remember: " +
        this.remember.checked
    );
    event.preventDefault();
  }
  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md" sticky="top">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/" style={{ fontFamily: "Comfortaa", color: "white" }}>
             <h3>Rollpark</h3> 
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="ml-auto">
                <NavItem className="align-self-center">
                  <NavLink className="nav-link" style={{color: 'white', textDecoration: "none"}} activeStyle={{color: "#C4C4C4", textDecoration: 'none'}}  to="/home">
                     Why Rollpark
                  </NavLink>
                </NavItem >
                <NavItem className="align-self-center">
                  <NavLink className="nav-link" style={{color: 'white', textDecoration: "none"}} activeStyle={{color: "#C4C4C4", textDecoration: 'none'}} to="/aboutus">
                     Case Studies
                  </NavLink>
                </NavItem>
                <NavItem className="align-self-center">
                  <NavLink className="nav-link" style={{color: 'white', textDecoration: "none"}} activeStyle={{color: "#C4C4C4", textDecoration: 'none'}} to="/menu">
                     Installation
                  </NavLink>
                </NavItem>
                <NavItem className="align-self-center">
                  <NavLink className="nav-link" style={{color: 'white', textDecoration: "none"}} activeStyle={{color: "#C4C4C4", textDecoration: 'none'}} to="/contactus">
                     Company
                  </NavLink>
                </NavItem>
                <NavItem className="align-self-center">
                  <NavLink className="nav-link" style={{color: 'white', textDecoration: "none"}} activeStyle={{color: "#C4C4C4", textDecoration: 'none'}} to="/contactus">
                     Specs
                  </NavLink>
                </NavItem >
              </Nav>
              <Nav className="ml-auto " navbar>
                <NavItem className="align-self-center">
                  <NavLink className="nav-link" style={{color: 'white', textDecoration: "none"}} activeStyle={{color: "#C4C4C4", textDecoration: 'none'}} to="/menu">
                     FAQ
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Button className="NavButton" onClick={this.toggleModal}>
                     Get a Quote
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Rollpark</h1>
                <p>
                  We take inspiration from the World's best infrastructure, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your senses!
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
