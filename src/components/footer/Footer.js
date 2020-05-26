import React from "react";

import SocialIcon from "../shared/SocialIcon";

import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <SocialIcon iconClass={"github-new-01.svg"} socialNetwork="github" />
            <SocialIcon iconClass={"twitter.svg"} socialNetwork="twitter" />
            <SocialIcon iconClass={"linkedin-new3.svg"} socialNetwork="linkedin" />
        </footer>
    )
}

export default Footer;