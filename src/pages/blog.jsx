/* eslint-disable react/prop-types */
import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Bio from "../components/bio";

const BlogPage = ({ data, location }) => {
    const posts = data.allMarkdownRemark.nodes;

    return (
        <Layout location={location} title={"Blog"}>
            <Seo title="Blog" />
            <div id="container-blog">
                <Bio />
                <ol className="blog-list-view">
                    {posts.map((post) => {
                        const title = post.frontmatter.title || post.fields.slug;

                        return (
                            <li key={post.fields.slug} className="blog-list-item">
                                <Link to={post.fields.slug}>
                                    <>
                                        <h2>{title}</h2>
                                        <p className="date">{post.frontmatter.date}</p>
                                        {/* <ul className="tag-list">
                                            <li>태그1</li>
                                            <li>태그2</li>
                                        </ul> */}
                                        <section>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: post.frontmatter.description || post.excerpt,
                                                }}
                                            />
                                        </section>
                                    </>
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
                }
            }
        }
    }
`;
