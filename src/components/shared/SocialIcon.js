import React from "react";

import './SocialIcon.scss';

const SocialIcon = ({ iconClass, socialNetwork }) => {

    return (
        <div className={`social ${socialNetwork}`}>
        </div>
    )
}

export default SocialIcon