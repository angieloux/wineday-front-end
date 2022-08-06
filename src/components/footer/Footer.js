import React from "react";
import './footer.styles.scss'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            {year} © WineDay
        </footer>
    )
}

export default Footer;