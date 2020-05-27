import React from "react";

import BlogSummary from '../components/blog/BlogSummary';

import Layout from '../components/shared/Layout';

const Blog = () => {
    return (
        <Layout>
            <h1>Blog</h1>
            <BlogSummary />
            <BlogSummary />
            <BlogSummary />
        </Layout>
    )
}

export default Blog;