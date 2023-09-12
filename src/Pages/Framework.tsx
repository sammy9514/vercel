import { FaReact, FaVuejs } from "react-icons/fa";
import {
  SiAngular,
  SiEmberdotjs,
  SiGatsby,
  SiHugo,
  SiNextdotjs,
  SiNuxtdotjs,
  SiSvelte,
} from "react-icons/si";
import { styled } from "styled-components";

const Frameworks = () => {
  return (
    <div>
      <Container>
        <Text>WORKS WITH 30+ FRAMEWORKS</Text>
        <Frames>
          <Icons>
            <Icon>
              <SiNextdotjs />
            </Icon>
            <Icon>
              <FaReact />
            </Icon>
            <Icon>
              <SiSvelte />
            </Icon>
            <Icon>
              <SiNuxtdotjs />
            </Icon>
            <Icon>
              <FaVuejs />
            </Icon>
            <Icon>
              <SiEmberdotjs />
            </Icon>
            <Icon>
              <SiAngular />
            </Icon>
            <Icon>
              <SiHugo />
            </Icon>
            <Icon>
              <SiGatsby />
            </Icon>
          </Icons>
        </Frames>
        <LineCircle>
          <Line></Line>
          <Circle>2</Circle>
          <h2>Preview</h2>
        </LineCircle>
        <LargeText>Iterate with your team</LargeText>
        <WriteUp>
          Make frontend development a collaborative experience with automatic
          Preview Deployments for every code change, by seamlessly integrating
          with<span> GitHub</span>, <span>GitLab</span>, and{" "}
          <span>Bitbucket</span>.
        </WriteUp>
      </Container>
    </div>
  );
};

export default Frameworks;

const Icon = styled.div`
  color: white;
  font-size: 40px;
`;

const Icons = styled.div`
  width: 40%;
  justify-content: space-between;
  display: flex;
`;

const Frames = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: start;
  justify-content: center;
`;

const WriteUp = styled.div`
  width: 700px;
  height: 300px;
  color: #a1a1a1ff;
  text-align: center;
  font-size: 24px;
  font-weight: 500px;
  margin-top: 30px;

  span {
    color: #de1d8dff;
    transition: all 350ms;
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
`;

const LargeText = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 65px;
  font-weight: 700;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(to top, #cececeff, #f0f0f0ff);
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  background: linear-gradient(to right, #8125c5ff, #e9078cff);
`;

const Line = styled.div`
  height: 120px;
  width: 1px;
  background: linear-gradient(to bottom, black, #8125c5ff, #8125c5ff);
  display: flex;
  align-items: end;
  justify-content: center;
`;

const LineCircle = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: end;
  h2 {
    color: white;
    font-size: 30px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(to right, #8125c5ff, #e9078cff);
  }
`;

const Text = styled.div`
  width: 100%;
  height: 10vh;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: start;
  justify-content: center;
  color: #838383ff;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  overflow: hidden;
`;
