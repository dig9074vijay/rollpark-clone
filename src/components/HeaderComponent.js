import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  
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
import home from "../videos/home.mp4"
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
                <NavItem >
                  <NavLink className="nav-link"   to="/home">
                     Why Rollpark
                  </NavLink>
                </NavItem >
                <NavItem >
                  <NavLink className="nav-link"  to="/aboutus">
                     Case Studies
                  </NavLink>
                </NavItem>
                <NavItem >
                  <NavLink className="nav-link"  to="/menu">
                     Installation
                  </NavLink>
                </NavItem>
                <NavItem >
                  <NavLink className="nav-link"  to="/contactus">
                     Company
                  </NavLink>
                </NavItem>
                <NavItem >
                  <NavLink className="nav-link"  to="/contactus">
                     Specs
                  </NavLink>
                </NavItem >
              </Nav>
              <Nav className="ml-auto " navbar>
                <NavItem className="align-self-center">
                  <NavLink className="nav-link"  to="/menu">
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
        <video autoPlay
          loop
          muted
          style={{position:"relative",width:"100%", height:"100%", objectFit:"cover",left:"50%",top:"50%", transform:"translate(-50%,-10%)"}}>         
          <source src={home} type="video/mp4"/>
        </video>
        
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
