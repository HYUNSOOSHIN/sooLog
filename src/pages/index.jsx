import * as React from "react";
import { Link } from "@reach/router";
import Layout from "../components/layout";
import Seo from "../components/seo";
import img_hyunsoo from "/static/images/hyunsoo.jpg";

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />
        <div id="container-home">
            <div className="logo-view">
                <Link className="logo" to="/resume">
                    <img src={img_hyunsoo} />
                </Link>
            </div>
            <h1>HYUNSOOSHIN</h1>
            <p>안녕하세요. 신현수입니다.</p>
        </div>
    </Layout>
);

export default IndexPage;
