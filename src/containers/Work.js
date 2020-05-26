import React from "react";

import WorkGrid from "../components/workgrid/WorkGrid";
import Layout from '../components/shared/Layout';

const Work = () => {
    return (
        <Layout>
            <div>
                <h1 className="intro-text">Hi I’m <span className="lblue">Jon Le Marquand</span>, a full-stack web developer.</h1>
                <h2 className="intro-text">Here’s a few things I’ve worked on:</h2>
            </div>

            <WorkGrid />
        </Layout>
    )
}

export default Work;