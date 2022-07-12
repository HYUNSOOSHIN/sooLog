import * as React from "react";
import { Link } from "@reach/router";
import Header from "../components/header";
import Seo from "../components/seo";

const IndexPage = () => (
    <>
        <Header />
        <Seo title="Home" />
        <div id="container-home">
            <div className="logo-view">
                <Link className="logo" to="/about"></Link>
            </div>
            <h1>HYUNSOOSHIN</h1>
            <p>안녕하세요. 신현수입니다.</p>
        </div>
    </>
);

export default IndexPage;
