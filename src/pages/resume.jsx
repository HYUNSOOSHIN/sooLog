import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPage = () => (
    <Layout>
        <Seo title="Resume" />
        <div id="container-resume">
            <section>
                <h2>Introduce.</h2>
            </section>

            <section>
                <h2>Work Experience.</h2>
            </section>

            <section>
                <h2>Skill.</h2>
            </section>

            <section>
                <h2>Side Projects.</h2>
            </section>

            <section>
                <h2>Education.</h2>
            </section>
        </div>
    </Layout>
);

export default BlogPage;
