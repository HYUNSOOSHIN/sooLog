/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Link, graphql } from "gatsby";
import { navigate } from "@reach/router";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Bio from "../components/bio";
import "../styles/blog-post.scss";
import { useScrollEvent } from "../hooks/useScrollEvent";

const BlogPostTemplate = ({ data, location }) => {
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata?.title || `Title`;
    const { previous, next } = data;

    useEffect(() => {
        const headerElements = getHeaderElements();

        headerElements.forEach((headerElement) => {
            const tocLinkElement = document.querySelector(`a[href*="${encodeURI(headerElement.id)}"]`);
            if (tocLinkElement)
                tocLinkElement.addEventListener("click", (e) => {
                    e.preventDefault();
                    navigate(`#${headerElement.id}`, { replace: true });
                });
        });
    });

    const getHeaderElements = () => {
        const headerSelectors = `h1, h2, h3, h4`;
        return Array.from(document.querySelectorAll(headerSelectors));
    };

    const onScroll = () => {
        const currentoffsetY = window.pageYOffset;
        const headerElements = getHeaderElements();
        for (const headerElement of headerElements) {
            const { top } = headerElement.getBoundingClientRect();
            const elementTop = top + currentoffsetY;
            const tocLinkElement = document.querySelector(`a[href*="${encodeURI(headerElement.id)}"]`);
            if (tocLinkElement) {
                if (currentoffsetY >= elementTop - 10) {
                    headerElement.classList.add("toc-header-active");
                    tocLinkElement.classList.add("active");
                } else {
                    headerElement.classList.remove("toc-header-active");
                    tocLinkElement.classList.remove("active");
                }
            }
        }
    };

    const toFit = (cb, { dismissCondition = () => false, triggerCondition = () => true }) => {
        if (!cb) {
            throw Error("Invalid required arguments");
        }

        let tick = false;

        return function () {
            if (tick) {
                return;
            }

            tick = true;
            return requestAnimationFrame(() => {
                if (dismissCondition()) {
                    tick = false;
                    return;
                }

                if (triggerCondition()) {
                    tick = false;
                    return cb();
                }
            });
        };
    };

    useScrollEvent(() => {
        return toFit(onScroll, {})();
    });

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />

            <aside>
                {/* <div className="toc" dangerouslySetInnerHTML={{ __html: post.tableOfContents }} /> */}
                <div className="toc">
                    <p>Table of Contents</p>
                    {post.headings.map((heading) => {
                        if (heading.depth > 4) {
                            return <div />;
                        }

                        return (
                            <div key={heading.value}>
                                <a className={"depth" + heading.depth} href={`#${heading.value.replace(/\s+/g, "-").toLowerCase()}`}>
                                    {heading.value}
                                </a>
                            </div>
                        );
                    })}
                </div>
            </aside>

            <article className="blog-post-view">
                <div className="title-view">
                    <h1>{post.frontmatter.title}</h1>
                    <p>{post.frontmatter.date}</p>
                </div>
                <section className="contents-view markdown-body" dangerouslySetInnerHTML={{ __html: post.html }} />
                <div className="bio-view">
                    <Bio />
                </div>
            </article>

            <nav className="blog-post-nav">
                <ul>
                    <li>
                        {previous && (
                            <Link to={previous.fields.slug} rel="prev">
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={next.fields.slug} rel="next">
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </Layout>
    );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(id: { eq: $id }) {
            id
            excerpt(pruneLength: 160)
            html
            tableOfContents
            headings {
                value
                depth
            }
            frontmatter {
                title
                date(formatString: "YYYY.MM.DD")
                description
            }
        }
        previous: markdownRemark(id: { eq: $previousPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
        next: markdownRemark(id: { eq: $nextPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
    }
`;
