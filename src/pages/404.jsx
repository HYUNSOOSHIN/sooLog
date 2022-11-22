import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import img_hyunsoo from "/static/images/hyunsoo.jpg";

const NotFoundPage = () => (
    <Layout>
        <Seo title="404: Not found" />
        <div id="container-404">
            <img src={img_hyunsoo} />

            <div>
                <h1>해당 페이지를 찾을 수 없습니다.</h1>
                <p>다른 콘텐츠를 이용해주세요.</p>
            </div>
        </div>
    </Layout>
);

export default NotFoundPage;
