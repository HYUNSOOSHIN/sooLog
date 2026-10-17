/* eslint-disable react/prop-types */
import React, { useMemo } from "react";
import { Link, graphql, navigate } from "gatsby";
import { useScrollEvent } from "../hooks/useScrollEvent";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Bio from "../components/bio";
import "../styles/blog-post.scss";

const getHeaderElements = () => {
    return Array.from(document.querySelectorAll(`.contents-view :is(h1, h2, h3, h4)[id]`));
};

const getTocLinkElement = (id) => {
    return document.querySelector(`.toc a[href="#${CSS.escape(id)}"]`);
};

const onScroll = () => {
    const currentoffsetY = window.pageYOffset;
    for (const headerElement of getHeaderElements()) {
        const { top } = headerElement.getBoundingClientRect();
        const elementTop = top + currentoffsetY;
        const tocLinkElement = getTocLinkElement(headerElement.id);
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

// requestAnimationFrame 단위로 콜백 실행을 제한
const throttleByAnimationFrame = (cb) => {
    let tick = false;

    return () => {
        if (tick) {
            return;
        }

        tick = true;
        requestAnimationFrame(() => {
            tick = false;
            cb();
        });
    };
};

const BlogPostTemplate = ({ data, location }) => {
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata?.title || `Title`;
    const { previous, next } = data;

    const throttledOnScroll = useMemo(() => throttleByAnimationFrame(onScroll), []);
    useScrollEvent(throttledOnScroll);

    const onClickTocLink = (e, id) => {
        e.preventDefault();
        navigate(`#${id}`, { replace: true });
    };

    return (
        <Layout location={location} title={siteTitle}>

            <aside>
                <div className="toc">
                    <p>Table of Contents</p>
                    {post.headings
                        .filter((heading) => heading.depth <= 4 && heading.id)
                        .map((heading) => (
                            <div key={heading.id}>
                                <a className={"depth" + heading.depth} href={`#${heading.id}`} onClick={(e) => onClickTocLink(e, heading.id)}>
                                    {heading.value}
                                </a>
                            </div>
                        ))}
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

export const Head = ({ data, location }) => {
    const post = data.markdownRemark;
    return <Seo title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} pathname={location.pathname} type="article" />;
};

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
                id
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
