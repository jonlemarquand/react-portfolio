import PropTypes from "prop-types"
import React from "react"

import "./WorkCard.scss"

const WorkCard = ({ title, stack, gridImg, onClick, dataID }) => {
  return (
    <div className="item">
      <img className="item-img" src={require(`../../assets/images/${gridImg}`)} alt={title} />
      <div className="overlay" onClick={onClick}>
        <div className="project-text pt-large">
          <div className="explainer">{stack}</div>
          <div className="project-title">{title}</div>
        </div>
      </div>
    </div>
  )
}

WorkCard.propTypes = {
  title: PropTypes.string,
}

WorkCard.defaultProps = {
  siteTitle: ``,
}

export default WorkCard
