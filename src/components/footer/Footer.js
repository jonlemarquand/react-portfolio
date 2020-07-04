import React from "react";

import SocialIcon from "../shared/SocialIcon";

import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <SocialIcon socialNetwork="github" socialLink="https://www.github.com/jonlemarquand"/>
            <SocialIcon socialNetwork="twitter" socialLink="https://www.twitter.com/jonlemarquand"/>
            <SocialIcon socialNetwork="linkedin" socialLink="https://www.linkedin.com/in/jonlemarquand"/>
        </footer>
    )
}

export default Footer;