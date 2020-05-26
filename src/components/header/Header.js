import PropTypes from "prop-types"
import React from "react"
import { withRouter } from "react-router-dom";

import Nav from './nav'

import "./Header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <Nav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withRouter(Header)
