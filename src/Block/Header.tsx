import React, { useState } from "react";
import styled from "styled-components";
import GlobalButton from "../common/GlobalButton";
import { FiMenu } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
const Header = () => {
  const [show, setShow] = useState(false);

  const Toggle = () => {
    setShow(!show);
  };

  const [header, setHeader] = useState(false);
  const scroll = () => {
    let page = window.pageYOffset;
    if (page >= 1) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", scroll);
  return (
    <div>
      {header ? (
        <Container bg="" po="fixed" bf="blur(8px)" bb=".1px solid silver">
          <Wrapper>
            <Wrap>
              <Holder>
                <svg
                  width="76"
                  height="40"
                  viewBox="0 0 76 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" />
                </svg>

                <h1>Vercel</h1>
              </Holder>

              <NavHolder>
                <Navs onMouseOver={Toggle}>
                  Features
                  <FaAngleDown />
                </Navs>
                <Navs>Docs</Navs>
                <Navs>Templates</Navs>
                <Navs>Integrations</Navs>
                <Navs>Customers</Navs>
                <Navs>Enterprise</Navs>
                <Navs>Pricing</Navs>
              </NavHolder>
            </Wrap>

            <ButtonHolder>
              <Navs>Contact</Navs>
              <GlobalButton text="Login" bcc="black" color="white" />
              <GlobalButton text="Sign iUp" bcc="#fff" color="#000" />
            </ButtonHolder>
            <Icon onMouseOver={Toggle}>
              <FiMenu />
            </Icon>

            {show ? (
              <Card>
                <ContentWrap>
                  <Left>
                    <Top>Helloo</Top>
                    <Top>Helloo</Top>
                    <Top>Helloo</Top>
                  </Left>
                  <Right>
                    <Top>Helloo</Top>
                    <Top>Helloo</Top>
                    <Top>Helloo</Top>
                  </Right>
                </ContentWrap>
              </Card>
            ) : null}
          </Wrapper>
        </Container>
      ) : (
        <Container bg="black" po="sticky" bf="none" bb="none">
          <Wrapper>
            <Wrap>
              <Holder>
                <svg
                  width="76"
                  height="40"
                  viewBox="0 0 76 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" />
                </svg>

                <h1>Vercel</h1>
              </Holder>

              <NavHolder>
                {show ? (
                  <Navs onMouseEnter={Toggle}>
                    Features
                    <FaAngleUp />
                  </Navs>
                ) : (
                  <Navs onMouseEnter={Toggle}>
                    Features
                    <FaAngleDown />
                  </Navs>
                )}

                <Navs>Docs</Navs>
                <Navs>Templates</Navs>
                <Navs>Integrations</Navs>
                <Navs>Customers</Navs>
                <Navs>Enterprise</Navs>
                <Navs>Pricing</Navs>
              </NavHolder>
            </Wrap>

            <ButtonHolder>
              <Navs>Contact</Navs>
              <GlobalButton text="Login" bcc="black" color="white" />
              <GlobalButton text="Sign iUp" bcc="#fff" color="#000" />
            </ButtonHolder>
            <Icon onMouseEnter={Toggle}>
              <FiMenu />
            </Icon>

            {show ? (
              <Card>
                <ContentWrap>
                  <Left>
                    <Top>Helloo</Top>
                    <Top>Helloo</Top>
                    <Top>Helloo</Top>
                  </Left>
                  <Right>
                    <Top>Helloo</Top>
                    <Top>Helloo</Top>
                    <Top>Helloo</Top>
                  </Right>
                </ContentWrap>
              </Card>
            ) : null}
          </Wrapper>
        </Container>
      )}
    </div>
  );
};

export default Header;
const Top = styled.div``;
const Right = styled.div`
  width: 48%;
`;
const Left = styled.div`
  width: 47%;
`;
const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: red;
`;
const Card = styled.div`
  width: 550px;
  height: 250px;
  backdrop-filter: blur(5px);
  position: absolute;
  left: 170px;
  top: 90px;
  border-radius: 20px;
  border: 1px solid silver;
  padding: 20px;
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 30px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
  }
  display: none;
`;
const ButtonHolder = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
`;
const Navs = styled.div`
  color: gray;
  margin-right: 35px;
  transition: all ease-in-out 350ms;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    color: #fff;
  }
`;
const NavHolder = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Holder = styled.div`
  display: flex;
  align-items: center;
  h1 {
    color: #fff;
    margin-right: 15px;
    font-size: 20px;
  }
`;
const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Container = styled.div<{
  bg: string;
  po: string;
  bf: string;
  bb: string;
}>`
  width: 100%;
  height: 80px;
  display: flex;
  background-color: ${({ bg }) => bg};
  justify-content: center;
  position: ${({ po }) => po};
  // transition: 500ms;
  // scroll-behaviour: smooth;
  backdrop-filter: ${({ bf }) => bf};
  border-bottom: ${({ bb }) => bb};
`;
