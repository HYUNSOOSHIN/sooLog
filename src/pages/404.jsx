import * as React from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
    <Layout>
        <div id="container-404">
            <img src={"/images/hyunsoo.jpg"} />

            <div>
                <h1>해당 페이지를 찾을 수 없습니다.</h1>
                <p>다른 콘텐츠를 이용해주세요.</p>
            </div>
        </div>
    </Layout>
);

export default NotFoundPage;

export const Head = ({ location }) => <Seo title="404: Not found" pathname={location.pathname} />;

Head.propTypes = {
    location: PropTypes.object.isRequired,
};
