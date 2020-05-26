import React from "react";

import Footer from '../footer/Footer';
import Header from '../header/Header';

import './Layout.scss';

const Layout = (props) => {
    return (
        <div className="defaultLayout">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout;