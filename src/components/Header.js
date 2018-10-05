// outsource dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink, Link  }  from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem} from 'reactstrap'
import {toastr} from 'react-redux-toastr'
import { withRouter } from 'react-router';

class Header extends Component {
    constructor ( props ) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle () {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        let { isAuthorized } = this.props;
        return (
            <header>
                <Navbar dark color="dark" expand="md">
                    <NavbarBrand tag={Link} to="/" className="font-italic text-uppercase">React Project</NavbarBrand>
                    { isAuthorized && (
                        <div className="navbar-text text-warning">
                            Hi, User!
                        </div>
                    )}
                    <NavbarToggler onClick={()=>this.toggle()} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink exact to="/" className="nav-link text-uppercase">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/login" className="nav-link text-uppercase">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    to="/secret"
                                    className="nav-link text-uppercase"
                                    onClick={()=>{!isAuthorized && toastr.warning('Login to see more properties!')}}
                                        >
                                    Private
                                </NavLink>
                            </NavItem>
                            { isAuthorized && (
                                <NavItem>
                                    <NavLink
                                        to="/user-settings"
                                        className="nav-link text-uppercase"
                                            >
                                        User settings
                                    </NavLink>
                                </NavItem>
                            )}
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
        )
    }
}

export default withRouter(connect(
    ( state ) => ({ isAuthorized: state.auth.isAuthorized })
)(Header));
