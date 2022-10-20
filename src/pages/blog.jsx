/* eslint-disable react/prop-types */
import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Bio from "../components/bio";

const BlogPage = ({ data, location }) => {
    const urlSearchParams = new URLSearchParams(location.search);
    const tagFilter = urlSearchParams.get("tag");

    const posts = data.allMarkdownRemark.nodes;
    const filteredPosts = tagFilter == null ? posts : posts.filter((post) => (post.frontmatter.tags || []).includes(tagFilter));
    const filteredTags = Array.from(new Set([].concat(...posts.map((post) => post.frontmatter.tags || []))));

    return (
        <Layout title={"Blog"}>
            <Seo title="Blog" />
            <div id="container-blog">
                <Bio />
                <aside>
                    <h2>Tags</h2>
                    <Link className={tagFilter == null ? "active" : ""} to={`/blog`}>
                        All
                    </Link>
                    {filteredTags.map((tag, tagIndex) => (
                        <Link key={tag + tagIndex} className={tagFilter == tag ? "active" : ""} to={`/blog?tag=${tag}`}>
                            {tag}
                        </Link>
                    ))}
                </aside>
                <ol className="blog-list-view">
                    {filteredPosts.map((post) => {
                        const title = post.frontmatter.title || post.fields.slug;
                        const description = post.frontmatter.description || post.excerpt;
                        const tags = post.frontmatter.tags || [];

                        return (
                            <li key={post.fields.slug} className="blog-list-item">
                                <Link to={post.fields.slug}>
                                    <h2>{title}</h2>
                                </Link>

                                <p className="date">{post.frontmatter.date}</p>
                                {tags.length > 0 && (
                                    <ul className="tag-list">
                                        {tags.map((tag, tabIndex) => (
                                            <li key={tag + tabIndex}>
                                                <button>{tag}</button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <Link to={post.fields.slug}>
                                    <p className="description" dangerouslySetInnerHTML={{ __html: description }} />
                                </Link>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </Layout>
    );
};

export default BlogPage;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                excerpt(pruneLength: 160, truncate: true)
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "YYYY.MM.DD")
                    title
                    description
                    tags
                }
            }
        }
    }
`;
