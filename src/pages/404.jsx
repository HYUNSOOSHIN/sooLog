import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
    <Layout>
        <Seo title="404: Not found" />
        <div id="container-404">
            <h1>해당 페이지를 찾을 수 없습니다.</h1>
            <p>다른 콘텐츠를 이용해주세요.</p>
        </div>
    </Layout>
);

export default NotFoundPage;
