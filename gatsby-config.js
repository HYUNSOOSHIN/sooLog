module.exports = {
    siteMetadata: {
        title: `HYUNSOOSHIN`,
        description: `안녕하세요. 신현수입니다.`,
        author: `@HYUNSOOSHIN`,
        siteUrl: `https://sooooolog.hyunsooshin.com`,
        image: "/images/hyunsoo.jpg",
        fgbProjects: [
            {
                title: "온리버디",
                description: "반려동물 용품 쇼핑몰",
                whatdidido: ` - 사용자 웹 / 통합관리자 웹 / 벤더관리자 웹 개발\n - Tech Stack : Next.js(CSR)`,
            },
            {
                title: "미미마켓",
                description: "지역기반 소상공인 상점 플랫폼",
                whatdidido: ` - 사용자 웹앱 / 상점주 웹앱 / 관리자 웹 개발\n - 웹뷰와 웹페이지간 데이터 통신 작업(SNS로그인 정보, 위치정보 등)\n - FCM push notification 기능 구현\n - SNS로그인 기능 구현\n - Teck Stack :  Next.js(CSR) & React Native(Webview)`,
            },
        ],
        sideProjects: [
            {
                title: "SOCKER",
                links: {
                    demo: "https://socker.co.kr",
                },
                subject: "소상공인 커뮤니티 서비스",
                img: "/images/SOCKER.jpg",
                descriptionList: ["팀 프로젝트 : 프론트엔드 개발자로 참여", "기간 : 2022.04 - 진행중", "Tech Stack : Next.js(CSR) / React Native"],
            },
            {
                title: "SOOLOG",
                links: {
                    demo: "https://sooooolog.hyunsooshin.com",
                    github: "https://github.com/HYUNSOOSHIN/sooLog",
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
                    "Tech Stack : React.js / Redux / FireBase(Authentication, FireStore, Storage)",
                ],
            },
            {
                title: "한담",
                links: {
                    // github: "https://github.com/HYUNSOOSHIN/handam-client",
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
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
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
