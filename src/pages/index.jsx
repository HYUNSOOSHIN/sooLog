import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />
        <div id="container-home">메인 페이지입니다.</div>
    </Layout>
);

export default IndexPage;
