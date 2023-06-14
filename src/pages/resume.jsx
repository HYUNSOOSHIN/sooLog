import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const ResumePage = () => {
    const pageQuery = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        fgbProjects {
                            title
                            description
                            whatdidido
                        }
                        sideProjects {
                            title
                            links {
                                demo
                                github
                            }
                            subject
                            img
                            descriptionList
                        }
                    }
                }
            }
        `
    );

    return (
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
                                <div className="content-box">
                                    <i className="fa-solid fa-m"></i>
                                    <p className="content">ISTP</p>
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
                                    <p className="period">2020.04 - 2023.03</p>
                                </div>
                                <div className="right">
                                    <ul>
                                        <li>• Gatsby.js 보일러 플레이트 개발</li>
                                        <li>• 외주 프로젝트 개발</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="project-view">
                                {pageQuery.site.siteMetadata.fgbProjects.map((item, index) => (
                                    <div key={index} className="project-item">
                                        <p className="title">
                                            <span className="dot">•</span> {item.title} <span className="description">{item.description}</span>
                                        </p>
                                        <p className="what-did-i-do">{item.whatdidido}</p>
                                    </div>
                                ))}
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
                            <li>• HTML/CSS</li>
                            <li>• JavaScript</li>
                            <li>• React.js</li>
                            <li>• Gatsby.js</li>
                            <li>• Next.js</li>
                            <li>• React Native</li>
                        </ul>
                    </div>
                </section>

                <section className="sideproject">
                    <h2>
                        Side Project<span className="dot">.</span>
                    </h2>
                    <div className="content-view">
                        {pageQuery.site.siteMetadata.sideProjects.map((item, index) => (
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
};

export default ResumePage;

const ProjectItem = (props) => {
    const { title = "", links = {}, subject = "", img = "", descriptionList = [] } = props.data;

    return (
        <div className="project-item">
            <div className="flex-view">
                <h4>{title}</h4>
                {links.demo && (
                    <a href={links.demo} target="_blank" rel="noreferrer" title="Demo">
                        <i className="fa-solid fa-desktop"></i>
                    </a>
                )}
                {links.github && (
                    <a href={links.github} target="_blank" rel="noreferrer" title="Github">
                        <i className="fa-brands fa-github"></i>
                    </a>
                )}
            </div>

            <p className="description">{subject}</p>

            <div className="img-wrapper">
                <img src={img} alt="pepsi-man project img" />
            </div>

            <ul>
                {descriptionList.map((item, index) => (
                    <li key={item + index}>• {item}</li>
                ))}
            </ul>
        </div>
    );
};

ProjectItem.propTypes = {
    data: PropTypes.object,
};
