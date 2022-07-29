import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => (
    <Layout>
        <Seo title="About" />
        <div id="container-about">
            <h1>제목입니다!!</h1>
            <p className="">내용입니다!!</p>
            <img src="" alt="about img" />
        </div>
    </Layout>
);

export default AboutPage;
