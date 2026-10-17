import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
    <Layout>
        <div id="container-home">
            <div className="logo-view">
                <Link className="logo" to="/resume">
                    <img src={"/images/hyunsoo.jpg"} />
                </Link>
            </div>
            <h1>HYUNSOOSHIN</h1>
            <p>안녕하세요. 신현수입니다.</p>
        </div>
    </Layout>
);

export default IndexPage;

export const Head = ({ location }) => <Seo title="Home" pathname={location.pathname} />;

Head.propTypes = {
    location: PropTypes.object.isRequired,
};
