import React from "react";

import SocialIcon from "../shared/SocialIcon";

import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <SocialIcon iconClass={"github-grey.png"} socialNetwork="github" socialLink="https://www.github.com/jonlemarquand"/>
            <SocialIcon iconClass={"twitter.svg"} socialNetwork="twitter" socialLink="https://www.twitter.com/jonlemarquand"/>
            <SocialIcon iconClass={"linkedin-new3.svg"} socialNetwork="linkedin" socialLink="https://www.linkedin.com/in/jonlemarquand"/>
        </footer>
    )
}

export default Footer;