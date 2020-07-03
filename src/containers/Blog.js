import React from "react";

import BlogSummary from '../components/blog/BlogSummary';

import Layout from '../components/shared/Layout';

const Blog = () => {
    return (
        <Layout>
            <h1>Blog</h1>
            <BlogSummary blogTitle="What a Git" blogDate="2 July 2020" blogCategory="Git, React"><p>Excitedly onboarding to an ongoing project, working with React, Less and all my favourite things. What could possible go wrong?</p></BlogSummary>
            <BlogSummary blogTitle="SQL: The Prequel" blogDate="24 June 2020" blogCategory="SQL"><p>Databases can make for a good headline when hacked, but often don't have the same level of thought put in by developers. That was the same for me, until now.</p></BlogSummary>
            <BlogSummary blogTitle="Get Your Own Game" blogDate="10 June 2020" blogCategory="React"><p>As a regular visitor to the BBC Sport website, I noticed they were using React to create their quizzes and thought to myself, 'How hard could it be?'</p></BlogSummary>
        </Layout>
    )
}

export default Blog;