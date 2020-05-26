import PropTypes from "prop-types";
import React from "react";
import {
    NavLink,
    withRouter
} from "react-router-dom";
import Logo from "../shared/logo";
import "./nav.scss";

const Nav = () => (
    <nav>
        <NavLink exact to="/" activeClassName="active">Work</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/">
            <Logo />
        </NavLink>
        <NavLink to="/blog" activeClassName="active">Blog</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
    </nav>
)

Nav.propTypes = {
    siteTitle: PropTypes.string,
}

Nav.defaultProps = {
    siteTitle: ``,
}

export default withRouter(Nav)
