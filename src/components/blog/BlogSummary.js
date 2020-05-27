import React from "react";

import './BlogSummary.scss';

const BlogSummary = (props) => {
    return (
        <div className="blog-summary">
            <div className="blog-image">
                <img src={require(`../../assets/images/icecream.jpg`)} alt="git tragedy" />
            </div>
            <div className="blog-text">
                <h2>What a Git.</h2>
                <p>Excitedly onboarding to an ongoing project, working with React, Less and all my favourite things. What could possible go wrong?</p>
            </div>
        </div>
    )
}

export default BlogSummary;