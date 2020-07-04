import React from "react";

import './SocialIcon.scss';

const SocialIcon = ({ socialNetwork, socialLink }) => {

    if (socialLink) {
    return (
        <a href={socialLink} target="_blank" rel='noreferrer'>
            <div className={`social ${socialNetwork}`}>
            </div>
        </a>
    )
    }
}

export default SocialIcon