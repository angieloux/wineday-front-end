import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = ({children}) => {
    return (
        <>
        <Header>
            <main>
                {children}
            </main>
        </Header>
        <Footer/>
        </>
    )
}

export default Layout;