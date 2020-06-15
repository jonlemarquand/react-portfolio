import React from "react";
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faFigma } from '@fortawesome/free-brands-svg-icons';

import Layout from '../components/shared/Layout';

import './About.scss';

const About = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <div className="aboutPage">
                <div className="skills">
                    <div className="skillsbox">
                        <h2>Front-End</h2>
                        <p>React</p>
                        <p>SASS, LESS</p>
                        <FontAwesomeIcon icon={faHtml5} />
                        <FontAwesomeIcon icon={faCss3Alt} />
                        <FontAwesomeIcon icon={faFigma} />
                        <p>HTML, CSS, Javascript</p>
                    </div>
                    <div className="skillsbox">
                    <h2>Back-End</h2>
                    <p>Node, Express, PHP</p>
                    <p>MySQL, PostgreSQL, MongoDB, Redis</p>
                    </div>
                    <div className="skillsbox">
                    <h2>Other</h2>
                    <p>Photoshop, InDesign, Figma</p>
                    </div>
                </div>
                <div className="about-me">
                    <p>I’m a web developer, looking to take on big and small projects. I’ve always been a big fan of messing around with computers ever since being surprised with a mousemat, which I assumed had been for dad’s old Amstrad. Instead, it was for our family’s first computer, complete with a whopping 3gb hard drive. After watching the Weezer video that shipped with Windows 95, I was hooked. And then came the internet…</p>
                    <p>When I was around 11, armed with a basic knowledge of HTML, I made what I like to think of as a gaming website that was just on the cusp of becoming a global hit. In reality, it had a mustard yellow and black colour theme, with more than enough gifs of bouncing spike balls to go with "Spyke's Gaming Site". So cool.</p>
                    <p>From there, I’ve always kept an interest in websites, even if my professional career initially started with graphic design. However, armed with a basic knowledge of HTML and CSS, I began to update pre-built sites in my professional career and, wanting to know more, embarked on a programme of self-learning in HTML, CSS and Javascript.</p>
                    <p>Since then, I’ve built a range of websites using many different languages including SASS, node.js, PHP, MySQL and the ever reliable jQuery. Want to see more of what I’ve done? Look above for some of the things I’ve worked on, look below for some musings and snippets. Want to add your name to the list? Get in touch below and I’ll see what I can do</p>.
                </div>
            </div>
        </Layout>
    )
}

export default withRouter(About);