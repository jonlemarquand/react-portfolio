import React from "react";

import './BlogSummary.scss';

const BlogSummary = ({ blogTitle, blogCategory, children, blogDate }) => {
    return (
        <div className="blog-summary">
            <img className="blog-image" src={require(`../../assets/images/icecream.jpg`)} alt="git tragedy" />
            <div className="blog-text">
                <h2>{blogTitle}</h2>
                <div className="blog-category">{blogDate} | {blogCategory}</div>
                <div className="blog-info">{children}</div>
            </div>
        </div>
    )
}

export default BlogSummary;