import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Router } from "@reach/router"
import userApi from "../apis/user/user"
import socialApi from "../apis/social/social"

import Page404 from "../pages/404"
import Loading from "../pages/loading"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/userInfo/post"
import Series from "../components/userInfo/series"
import Scrap from "../components/userInfo/scrap"
import Portfolio from "../components/userInfo/portfolio"

import EmailIcon from "@material-ui/icons/Email"
import GitHubIcon from "@material-ui/icons/GitHub"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkIcon from "@material-ui/icons/Link"

import user from "../images/user.png"

const UserInfo = props => {
  const [loading, setLoading] = useState(true)
  const [userInfo, setUserInfo] = useState({
    id: "",
    email: "",
    nickName: "",
    introduce: "",
    image: null,
  })
  const [socialInfo, setSocialInfo] = useState({
    github: null,
    twitter: null,
    facebook: null,
    homepage: null,
  })
  const [activeTab, setActiveTab] = useState(1)

  const param = props.id.replace("@", "")

  useEffect(() => {
    const getUser = async () => {
      const result1 = userApi.getUserInfo(param)
      const result2 = socialApi.getSocial(param)
      Promise.all([result1, result2])
        .then(result => {
          if (result) {
            setUserInfo({
              id: result[0].id,
              email: result[0].email,
              nickName: result[0].nickname,
              introduce: result[0].introduce,
              image: null,
            })
            setSocialInfo({
              github: result[1].github,
              twitter: result[1].twitter,
              facebook: result[1].facebook,
              homepage: result[1].homepage,
            })
          }
        })
        .then(() => setLoading(false))
    }
    getUser()
  }, [param])

  function renderTabContent() {
    switch (activeTab) {
      case 1:
        return <Post userId={props.id} />

      case 2:
        return <Series />

      case 3:
        return <Scrap />

      case 4:
        return <Portfolio />

      default:
        return <Post />
    }
  }

  return loading ? (
    <Loading />
  ) : (
    <Layout>
      <SEO title={`${userInfo.nickName}'s Info`} />
      <div>
        <InfoContainer>
          <ProfileImg src={user} alt="profileImg" />
          <InfoView>
            <IdText>{`@${userInfo.id}`}</IdText>
            <Line />
            <NickText>{`${userInfo.nickName}`}</NickText>
            <IntroText>{`${
              userInfo.introduce ? userInfo.introduce : ""
            }`}</IntroText>
            <div style={{ marginTop: "16px" }}>
              <div style={{ display: "flex", height: "max-content" }}>
                {socialInfo.github ? (
                  <a
                    href={`https://github.com/${socialInfo.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginRight: "1rem", color: "#555555" }}
                  >
                    <GitHubIcon style={{ width: "34px", height: "34px" }} />
                  </a>
                ) : null}
                {socialInfo.twitter ? (
                  <a
                    href={`https://twitter.com/${socialInfo.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginRight: "1rem", color: "#555555" }}
                  >
                    <TwitterIcon style={{ width: "34px", height: "34px" }} />
                  </a>
                ) : null}
                {socialInfo.facebook ? (
                  <a
                    href={`https://facebook.com/${socialInfo.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginRight: "1rem", color: "#555555" }}
                  >
                    <FacebookIcon style={{ width: "34px", height: "34px" }} />
                  </a>
                ) : null}
              </div>
              <div style={{ marginTop: "16px" }}>
                {userInfo.email ? (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <EmailIcon
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "0.5rem",
                      }}
                    />
                    <a
                      href={`/`}
                      style={{
                        margin: 0,
                        color: "#845ef7",
                        fontSize: "1rem",
                        textDecoration: "none",
                      }}
                    >
                      {`${userInfo.email}`}
                    </a>
                  </div>
                ) : null}
                {socialInfo.homepage ? (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <LinkIcon
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "0.5rem",
                      }}
                    />
                    <a
                      href={`${socialInfo.homepage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        margin: 0,
                        color: "#845ef7",
                        fontSize: "16px",
                        textDecoration: "none",
                      }}
                    >
                      {`${socialInfo.homepage}`}
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </InfoView>
        </InfoContainer>

        <div>
          <TabContainer>
            <Tab
              active={activeTab === 1 ? true : false}
              onClick={() => setActiveTab(1)}
            >
              ???
            </Tab>
            <Tab
              active={activeTab === 2 ? true : false}
              onClick={() => setActiveTab(2)}
            >
              ?????????
            </Tab>
            <Tab
              active={activeTab === 3 ? true : false}
              onClick={() => setActiveTab(3)}
            >
              ?????????
            </Tab>
            <Tab
              active={activeTab === 4 ? true : false}
              onClick={() => setActiveTab(4)}
            >
              ???????????????
            </Tab>
          </TabContainer>
          <TabContent>{renderTabContent()}</TabContent>
        </div>
      </div>
    </Layout>
  )
}

const userInfoRouter = () => {
  return (
    <Router>
      <Page404 path="userInfo" />
      <UserInfo path="userInfo/:id" />
    </Router>
  )
}

export default userInfoRouter

const InfoContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
`
const ProfileImg = styled.img`
  user-select: none;
  width: 12rem;
  height: 12rem;
  margin: 0;
  border-radius: 6rem;
`
const InfoView = styled.div`
  width: 100%;
  padding: 2.5rem 0 0 2rem;
`
const IdText = styled.div`
  color: rgb(137, 85, 246);
  font-size: 1rem;
  margin: 0;
`
const Line = styled.div`
  background-color: #dbdbdb;
  width: 100%;
  height: 1px;
  margin: 0.5rem 0;
`
const NickText = styled.p`
  font-size: 40px;
  font-weight: bold;
  margin: 0;
  margin-top: 1rem;
`
const IntroText = styled.p`
  font-size: 14px;
  margin: 0;
  margin-top: 1.5rem;
`
const TabContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
const Tab = styled.p`
  cursor: pointer;
  display: flex;
  width: 6rem;
  justify-content: center;
  color: ${props => (props.active ? "rgb(137,85,246)" : "black")};
  font-size: 1.2rem;
  margin: 0 1rem;
  padding: 0.5rem 0;
  border-bottom: ${props =>
    props.active ? "2px solid rgb(137,85,246)" : "none"};
`
const TabContent = styled.div`
  width: 100%;
  margin-top: 4rem;
`
