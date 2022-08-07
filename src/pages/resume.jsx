import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ProjectItem from "../components/item/projectItem";

const SIDE_PROJECTS = [
    {
        title: "SOCKER",
        links: {},
        subject: "소상공인 커뮤니티 서비스",
        img: "/images/SOCKER.png",
        descriptionList: ["팀 프로젝트 : 앱 개발자로 참여", "기간 : 2022.04-진행중", "Tech Stack : Node.js / Vue.js / React Native"],
    },
    {
        title: "SOOLOG",
        links: {
            demo: "https://sooooolog.gatsbyjs.io",
            github: "https://github.com/HYUNSOOSHIN/sooLog",
        },
        subject: "개인 블로그 겸 포트폴리오 페이지",
        img: "/images/hyunsoo.jpg",
        descriptionList: ["개인 프로젝트", "기간 : 2022.06-진행중", "Tech Stack : Gatsby.js"],
    },
    {
        title: "ZIORPARK",
        links: {
            demo: "https://hyunsooshin.github.io/pepsi-man",
            github: "https://github.com/HYUNSOOSHIN/pepsi-man",
        },
        subject: "가수/래퍼 ZIORPARK 페이지",
        img: "/images/PEPSI-MAN.png",
        descriptionList: [
            "개인 프로젝트",
            "기간 : 2020.11-2022.06",
            "미디어 쿼리를 이용한 반응형 웹 구현 / 다크모드 적용",
            "페이지 내 컨텐츠 관리를 위한 관리자 모드 개발",
            "Firebase를 이용한 사용자 인증 / 실시간 데이터베이스 적용",
            "Tech Stack : React.js / FireBase(Authentication, FireStore, Storage)",
        ],
    },
    {
        title: "한담",
        links: {
            link: "nothing",
        },
        subject: "한성대학교 커뮤니티 앱",
        img: "/images/HANDAM.png",
        descriptionList: [
            "팀 프로젝트 : 프론트엔드팀 앱 개발자로 참여",
            "기간 : 2018.06-2020.02",
            "강의평가 서비스를 시작으로 게시판 / 맛집추천 / 학교인증정보 서비스 개발",
            "Google PlayStore / Apple AppStore 배포 후 이용자 수 3000명 달성",
            "Tech Stack : React Native / Redux",
        ],
    },
];

const BlogPage = () => (
    <Layout>
        <Seo title="Resume" />
        <div id="container-resume">
            <h1>{`안녕하세요.\n하고 싶은 거 하고 싶은 프론트엔드 개발자,\n신현수입니다.`}</h1>

            <hr />

            <section className="introduce">
                <h2>
                    Introduce<span className="dot">.</span>
                </h2>
                <div className="content-view">
                    <div className="flex-view">
                        <div className="img-wrapper">
                            <img src="/images/introduce.png" alt="hyunsoo photo img" />
                        </div>
                        <div className="info-view">
                            <h3>Info</h3>
                            <div className="content-box">
                                <i className="fa-solid fa-user"></i>
                                <p className="content">신현수</p>
                            </div>
                            <div className="content-box">
                                <i className="fa-solid fa-cake-candles"></i>
                                <p className="content">1995.05.09</p>
                            </div>
                            <div className="content-box">
                                <i className="fa-solid fa-house"></i>
                                <p className="content">서울특별시 관악구 신림동</p>
                            </div>
                            <h3>Contact</h3>
                            <div className="content-box">
                                <i className="fa-solid fa-phone"></i>
                                <p className="content">010-0000-0000</p>
                            </div>
                            <div className="content-box">
                                <i className="fa-solid fa-square-envelope"></i>
                                <p className="content">shs0655@gmail.com</p>
                            </div>
                            <div className="content-box">
                                <i className="fa-brands fa-github"></i>
                                <a className="content" href="https://github.com/HYUNSOOSHIN" target="_blank" rel="noreferrer">
                                    https://github.com/HYUNSOOSHIN
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="experience">
                <h2>
                    Work Experience<span className="dot">.</span>
                </h2>
                <div className="content-view">
                    <div className="experience-item">
                        <a href="https://ict.fgb.ai/" target="_blank" rel="noreferrer" title="홈 페이지">
                            <span>프리것버드</span>
                        </a>
                        <p className="description">아웃소싱 외주 전문 개발사</p>
                        <div className="flex-view">
                            <div className="left">
                                <p className="position">Frontend Developer</p>
                                <p className="period">2020.04-현재 재직중</p>
                            </div>
                            <div className="right">
                                <ul>
                                    <li>• 외주 프로젝트 개발</li>
                                    <li>• Gatsby.js 보일러 플레이트 개발</li>
                                    <li>• (뭐했는지 생각중...)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="experience-item">
                        <h3>키즈팩토리</h3>
                        <p className="description">키즈카페 전용솔루션 서비스</p>
                        <div className="flex-view">
                            <div className="left">
                                <p className="position">Frontend Developer</p>
                                <p className="period">2019.11-2020.04</p>
                            </div>
                            <div className="right">
                                <ul>
                                    <li>• 키즈팩토리 솔루션 UX/UI 개발</li>
                                    <li>• Gatsby.js 기술 검토 및 도입</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="skill">
                <h2>
                    Skill<span className="dot">.</span>
                </h2>
                <div className="content-view">
                    <ul>
                        <li>HTML/CSS</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>Gatsby.js</li>
                        <li>React Native</li>
                    </ul>
                </div>
            </section>

            <section className="sideproject">
                <h2>
                    Side Project<span className="dot">.</span>
                </h2>
                <div className="content-view">
                    {SIDE_PROJECTS.map((item, index) => (
                        <ProjectItem key={item.title + index} data={item} />
                    ))}
                </div>
            </section>

            <section className="education">
                <h2>
                    Education<span className="dot">.</span>
                </h2>
                <div className="content-view">
                    <p>2014.03-2020.02 한성대학교 정보시스템공학</p>
                </div>
            </section>
        </div>
    </Layout>
);

export default BlogPage;
