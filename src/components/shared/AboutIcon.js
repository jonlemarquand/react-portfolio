import React from "react";

import './AboutIcon.scss';

const AboutIcon = ({ iconName, iconSrc }) => {

    return (
        <div className="about-item">
            <img className="about-icon" src={require(`../../assets/images/icons/${iconSrc}.png`)} alt={iconName} />
            <p>{iconName}</p>
        </div>
    )
}

export default AboutIcon