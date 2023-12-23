module.exports = {
    siteMetadata: {
        title: `HYUNSOOSHIN`,
        description: `안녕하세요. 신현수입니다.`,
        author: `@HYUNSOOSHIN`,
        siteUrl: `https://sooooolog.hyunsooshin.com`,
        image: "/images/hyunsoo.jpg",
        workExperiences: [
            {
                companyName: "에이비",
                companySiteUrl: "https://www.ba-system.co.kr",
                description: "자체 WMS, PMS & 영림원 ERP 개발사",
                position: "Frontend Developer",
                period: "2023.08 - 현재 재직중",
                summaries: ["자체서비스 WMS, PMS 개발", "외주 프로젝트 개발"],
                projects: [
                    {
                        title: "AB WMS",
                        description: "에이비 물류 관리 시스템",
                        whatdidido: ["WebView 형식 앱 개발", "구글 플레이스토어, 애플 앱스토어 배포", "Tech Stack: React.js, Redux, React Native, Node.js, Express.js"],
                    },
                    {
                        title: "FnBlock 외주 프로젝트",
                        description: "삼양인터네셔날 휴엔케어 테블릿 앱",
                        whatdidido: ["MUI를 이용한 페이지 작업", "MSSQL SP 작업", "Tech Stack: React.js, React Native, Redux"],
                    },
                    {
                        title: "AB PMS",
                        description: "에이비 프로젝트 관리 시스템",
                        whatdidido: ["MUI를 이용한 페이지 작업", "Node 서버 API 작업", "Tech Stack: React.js, Redux, Node.js, Express.js"],
                    },
                    {
                        title: "여의도 순복음교회",
                        description: "교회 모바일 앱",
                        whatdidido: ["영림원 소프트랩 Flexudio를 이용하여 페이지 개발"],
                    },
                ],
            },
            {
                companyName: "프리것버드",
                companySiteUrl: "https://ict.fgb.ai",
                description: "아웃소싱 외주 전문 개발사",
                position: "Frontend Developer",
                period: "2020.04 - 2023.03",
                summaries: ["Gatsby.js 보일러 플레이트 개발", "외주 프로젝트 개발"],
                projects: [
                    {
                        title: "온리버디",
                        description: "반려동물 용품 쇼핑몰",
                        whatdidido: [
                            "사용자 웹 / 통합관리자 웹 / 벤더관리자 웹 개발",
                            "웹 페이지 UI 작업 & API 연동 작업",
                            "SNS로그인 기능 작업 (카카오, 네이버, 구글, 애플)",
                            "CREMA 리뷰 위젯 연동 작업",
                            "PASS 본인 인증 연동 작업",
                            "Tech Stack: React.js, Next.js, Redux",
                        ],
                    },
                    {
                        title: "미미마켓",
                        description: "지역기반 소상공인 상점 플랫폼",
                        whatdidido: [
                            "사용자 웹앱 / 상점주 웹앱 / 관리자 웹 개발",
                            "웹 페이지 UI 작업 & API 연동 작업",
                            "웹뷰와 웹페이지간 데이터 통신 작업 (SNS로그인 정보, 위치정보 등)",
                            "FCM push notification 기능 구현",
                            "SNS로그인 기능 작업 (카카오, 네이버, 애플)",
                            "Teck Stack:  React.js, Next.js, Redux, React Native (Webview)",
                        ],
                    },
                ],
            },
        ],
        sideProjects: [
            {
                title: "chae",
                links: {
                    demo: "https://chae.hyunsooshin.com",
                    github: "",
                    android: "https://play.google.com/store/apps/details?id=com.app_mom",
                    ios: "",
                },
                subject: "심플한 음악 플레이어",
                img: "/images/chae.png",
                descriptionList: [
                    "개인 프로젝트",
                    "기간 : 2023.12 - 진행중",
                    "WebView 기반 앱 개발",
                    "웹, 앱 미디어 재생 플레이어 각각 개발 (NPM 패키지 사용)",
                    "웹뷰와 웹페이지간 데이터 통신 작업 (음악 재생 관련)",
                    "Google PlayStore 배포 진행중 (2023.12.23 기준)",
                    "Tech Stack : Next.js / React Native / FireBase",
                ],
            },
            // {
            //     title: "SOCKER",
            //     links: {
            //         demo: "https://socker.co.kr",
            //     },
            //     subject: "소상공인 커뮤니티 서비스",
            //     img: "/images/SOCKER.jpg",
            //     descriptionList: ["팀 프로젝트 : 프론트엔드 개발자로 참여", "기간 : 2022.04 - 진행중", "Tech Stack : Next.js(CSR) / React Native"],
            // },
            {
                title: "SOOLOG",
                links: {
                    demo: "https://sooooolog.hyunsooshin.com",
                    github: "https://github.com/HYUNSOOSHIN/sooLog",
                    android: "",
                    ios: "",
                },
                subject: "개인 블로그 겸 포트폴리오 페이지",
                img: "/images/hyunsoo.jpg",
                descriptionList: ["개인 프로젝트", "기간 : 2022.06 - 진행중", "Tech Stack : Gatsby.js"],
            },
            {
                title: "ZIORPARK",
                links: {
                    demo: "https://pepsi-man.hyunsooshin.com",
                    github: "https://github.com/HYUNSOOSHIN/pepsi-man",
                    android: "",
                    ios: "",
                },
                subject: "가수/래퍼 ZIORPARK 페이지",
                img: "/images/PEPSI-MAN.png",
                descriptionList: [
                    "개인 프로젝트",
                    "기간 : 2020.11 - 2022.06",
                    "Media Query를 이용한 반응형 웹 구현",
                    "Styled Components를 이용한 다크모드 기능 적용",
                    "페이지 내 컨텐츠 관리를 위한 관리자 모드 개발",
                    "Firebase를 이용한 사용자 인증 / 실시간 데이터베이스 적용",
                    "Tech Stack : React.js / Redux / FireBase (Authentication, FireStore, Storage)",
                ],
            },
            {
                title: "한담",
                links: {
                    demo: "",
                    // github: "https://github.com/HYUNSOOSHIN/handam-client",
                    android: "",
                    ios: "",
                },
                subject: "한성대학교 커뮤니티 앱",
                img: "/images/HANDAM.png",
                descriptionList: [
                    "팀 프로젝트 : 프론트엔드팀 앱 개발자로 참여",
                    "기간 : 2018.06 - 2020.02",
                    "게시판 / 맛집추천 / 학교인증정보서비스 기능 개발",
                    "Google PlayStore / Apple AppStore 배포",
                    "Tech Stack : React Native / Redux",
                ],
            },
        ],
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/content/blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 630,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#ffffff`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-sass`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                {
                  site {
                    siteMetadata {
                      title
                      description
                      siteUrl
                      site_url: siteUrl
                    }
                  }
                }
              `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMarkdownRemark } }) => {
                            return allMarkdownRemark.nodes.map((node) => {
                                return Object.assign({}, node.frontmatter, {
                                    description: node.excerpt,
                                    date: node.frontmatter.date,
                                    url: site.siteMetadata.siteUrl + node.fields.slug,
                                    guid: site.siteMetadata.siteUrl + node.fields.slug,
                                    custom_elements: [{ "content:encoded": node.html }],
                                });
                            });
                        },
                        query: `
                    {
                      allMarkdownRemark(
                        sort: { order: DESC, fields: [frontmatter___date] },
                      ) {
                        nodes {
                          excerpt
                          html
                          fields {
                            slug
                          }
                          frontmatter {
                            title
                            date
                          }
                        }
                      }
                    }
                  `,
                        output: "/rss.xml",
                        title: "Gatsby Starter Blog RSS Feed",
                    },
                ],
            },
        },
    ],
};
