/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";

const Layout = ({ children, isHeader = true }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            {isHeader && <Header siteTitle={data.site.siteMetadata?.title || `Title`} />}
            <main>{children}</main>
            <footer>
                <span className="copyright">&copy; HYUNSOOSHIN. 2022</span> <span className="powered">Powered by Gatsby</span>
            </footer>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    isHeader: PropTypes.bool,
};

export default Layout;
