import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Header = ({ siteTitle }) => (
    <header>
        <Link className="title" to="/">
            {siteTitle}
        </Link>
        <nav>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <a href="https://github.com/HYUNSOOSHIN" target="_blank" rel="noreferrer">
                Github
            </a>
        </nav>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
