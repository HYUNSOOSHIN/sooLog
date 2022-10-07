import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import img_hyunsoo from "/static/images/hyunsoo.jpg";

const AboutPage = () => (
    <Layout>
        <Seo title="About" />
        <div id="container-about">
            <h1>HYUNSOOSHIN PAGE</h1>
            <p className="">소개하는 페이지</p>
            <img src={img_hyunsoo} alt="about img" />
        </div>
    </Layout>
);

export default AboutPage;
