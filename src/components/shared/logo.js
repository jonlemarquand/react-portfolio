import PropTypes from "prop-types"
import React from "react"

import "./logo.scss"

const Logo = ({ siteTitle }) => (
    <div className="logo">
        JLM
    </div>
)

Logo.propTypes = {
    siteTitle: PropTypes.string,
}

Logo.defaultProps = {
    siteTitle: ``,
}

export default Logo
