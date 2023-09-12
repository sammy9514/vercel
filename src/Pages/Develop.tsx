import { styled } from "styled-components";

const Develop = () => {
  return (
    <div>
      <Container>
        <Text>EXPLORE THE VERCEL WAY</Text>
        <LineCircle>
          <Line></Line>
          <Circle>1</Circle>
          <h2>Develop</h2>
        </LineCircle>
        <LargeText>Build when inspiration strikes</LargeText>
        <WriteUp>
          Free developers from time-consuming, unnecessary processes that slow
          your work, so you and your team can focus on creating.
        </WriteUp>
      </Container>
    </div>
  );
};

export default Develop;

const WriteUp = styled.div`
  width: 700px;
  height: 300px;
  color: #a1a1a1ff;
  text-align: center;
  font-size: 24px;
  font-weight: 500px;
  margin-top: 30px;
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
  background: linear-gradient(to right, #0083eeff, #00cfdbff);
`;

const Line = styled.div`
  height: 120px;
  width: 1px;
  background: linear-gradient(to bottom, black, #015a88ff, #0198e6ff);
  display: flex;
  align-items: end;
  justify-content: center;
`;

const LineCircle = styled.div`
  // margin-bottom: 220px;
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
    background-image: linear-gradient(to right, #0083eeff, #00cfdbff);
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
  height: 90vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
