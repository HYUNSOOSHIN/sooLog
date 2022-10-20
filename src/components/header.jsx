import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Header = ({ siteTitle }) => {
    const [isSideBar, setIsSideBar] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) {
                setIsSideBar(false);
            }
        });

        return () => {
            window.removeEventListener("resize", () => {
                if (window.innerWidth > 768) {
                    setIsSideBar(false);
                }
            });
        };
    }, []);

    const onClickHam = () => {
        setIsSideBar(!isSideBar);
    };

    return (
        <header>
            <Link className="title" to="/">
                {siteTitle}
            </Link>

            <div className={`opacity-view ${isSideBar ? "active" : ""}`} onClick={onClickHam} />

            <button className="hamberger" onClick={onClickHam}>
                <i className="fa-solid fa-bars"></i>
            </button>

            <nav className={isSideBar ? "active" : ""}>
                <Link to="/blog">Blog</Link>
                <a href="https://github.com/HYUNSOOSHIN" target="_blank" rel="noreferrer">
                    Github
                </a>
            </nav>
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
