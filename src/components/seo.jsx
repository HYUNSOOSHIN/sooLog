/**
 * SEO component for Gatsby Head API
 * 각 페이지에서 `export const Head = ({ location }) => <Seo ... />` 형태로 사용
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

function Seo({ description = ``, lang = `ko`, title, pathname = `/`, type = `website`, children }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        siteUrl
                        image
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;
    const defaultTitle = site.siteMetadata?.title;
    const siteUrl = site.siteMetadata?.siteUrl || ``;
    // og:url, og:image는 절대 URL이어야 SNS 미리보기에 표시됨
    const pageUrl = `${siteUrl}${pathname}`;
    const imageUrl = `${siteUrl}${site.siteMetadata?.image || ``}`;

    return (
        <>
            <html lang={lang} />
            <title>{defaultTitle ? `${title} / ${defaultTitle}` : title}</title>
            <link rel="canonical" href={pageUrl} />
            <meta name="description" content={metaDescription} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:site_name" content={defaultTitle} />
            <meta property="og:locale" content="ko_KR" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={imageUrl} />
            {children}
        </>
    );
}

Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    title: PropTypes.string.isRequired,
    pathname: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.node,
};

export default Seo;
