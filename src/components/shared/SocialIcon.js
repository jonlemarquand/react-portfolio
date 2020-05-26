import React from "react";

import './SocialIcon.scss';

const SocialIcon = ({ iconClass, socialNetwork }) => {

    return (
        <div className="social">
            <object type="image/svg+xml" data={require(`../../assets/images/socials/${iconClass}`)} className={`socialIcon ${socialNetwork}`}>
                {socialNetwork}
            </object>
        </div>
    )
}

export default SocialIcon