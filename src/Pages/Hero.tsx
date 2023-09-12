import { styled, keyframes } from "styled-components";
import { BsFillTriangleFill } from "react-icons/bs";
import { useRef, useEffect, useState } from "react";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

const Hero = () => {
  const [scroll, setScroll] = useState(false);
  const scrollup = () => {
    if (window.pageYOffset > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const scrolll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollup);
  });

  const Dev: string[] = [
    " background-image: linear-gradient(to right, #0089ecff, #00cdddff);-webkit-text-fill-color: transparent;-webkit-background-clip: text",
    "white",
    "white",
  ];
  const Prev: string[] = [
    "white",
    " background-image: linear-gradient(to right, purple, violet);-webkit-text-fill-color: transparent;-webkit-background-clip: text",
    "white",
  ];
  const Shi: string[] = [
    "white",
    "white",
    " background-image: linear-gradient(to right, orangered, orange);-webkit-text-fill-color: transparent;-webkit-background-clip: text",
  ];

  const Devbtn: string[] = [
    "background: linear-gradient(to right, darkblue, blue); border: 1px solid blue; box-shadow: 0px 0px 100px blue",
    "background: linear-gradient(to right, purple, violet); border: 1px solid purple; box-shadow: 0px 0px 100px violet",
    "background: linear-gradient(to right, orangered, orange); border: 1px solid orange; box-shadow: 0px 0px 100px orange",
  ];

  const border: string[] = [
    "border: 3px solid #0089ecff; box-shadow: 0px 0px 100px #0089ecff; background-color: black",
    "border: 3px solid violet; box-shadow: 0px 0px 100px violet; background-color: black",
    "border: 3px solid orange; box-shadow: 0px 0px 100px orange; background-color: black",
  ];

  const colors = ["#0089ecff", "violet", "orange"];

  const border_ref: any = useRef();
  useEffect(() => {
    border_ref.current.style = border[count % border.length];
  });

  const Hover = () => {
    if (border_ref.current) {
      border_ref.current.style.backgroundColor = colors[count % colors.length];
    }
  };

  let dev_ref: any = useRef();
  let prev_ref: any = useRef();
  let shi_ref: any = useRef();

  const [count, setCount] = useState(0);

  useEffect(() => {
    dev_ref.current.style = Dev[count % Dev.length];
    prev_ref.current.style = Prev[count % Prev.length];
    shi_ref.current.style = Shi[count % Shi.length];
  }, [count]);

  useEffect(() => {
    setInterval(() => {
      setCount((el) => el + 1 / 2);
    }, 2000);
  }, []);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const Target = new Date("9/25/2023 11:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = Target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);
  });

  return (
    <div>
      <Container>
        <H>
          <DPS ref={dev_ref}>Develop.</DPS>
          <DPS ref={prev_ref}>Preview.</DPS>
          <DPS ref={shi_ref}>Ship.</DPS>
        </H>
        <WriteUp>
          Vercel's frontend cloud gives developers the frameworks, workflows,
          <br />
          and infrastructure to build a faster, more personalized Web.
        </WriteUp>
        <BtnHolder>
          <Button>
            <BsFillTriangleFill style={{ marginRight: "10px" }} />
            Start Deploying
          </Button>
          <Button1 onMouseOver={Hover} ref={border_ref}>
            Get a Demo
          </Button1>
        </BtnHolder>
        <Top onClick={scrolll}></Top>
        <Wrap>
          <DaysDiv>
            <Div>Days:</Div>
            <Hold>{days}</Hold>
          </DaysDiv>
          <DaysDiv>
            <Div>Hours:</Div>
            <Hold>{hours}</Hold>
          </DaysDiv>
          <DaysDiv>
            <Div>Minutes: </Div>
            <Hold>{minutes}</Hold>
          </DaysDiv>
          <DaysDiv>
            <Div>Seconds:</Div>
            <Hold>{seconds}</Hold>
          </DaysDiv>
        </Wrap>
      </Container>
    </div>
  );
};

export default Hero;

const Top = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 20px;
`;

const Div = styled.div`
  margin-right: 5px;
`;

const Hold = styled.div``;

const DaysDiv = styled.div`
  display: flex;
  color: white;
  margin-right: 20px;
  font-size: 20px;
`;

const Wrap = styled.div`
  display: flex;
`;

const H = styled.div`
  display: flex;
  transition: all 350ms ease;
`;

const BtnHolder = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button1 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 2px solid white;
  background-color: transparent;
  font-size: 18px;
  padding: 17px 60px;
  margin-left: 30px;
  border-radius: 10px;
  transition: all 350ms;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    background-color: color;
  }
`;
const Button = styled.button`
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: white;
  border: 0;
  font-size: 17px;
  padding: 18px 30px;
  border-radius: 10px;
  transition: all 350ms;
  &:hover {
    cursor: pointer;
  }
`;

const WriteUp = styled.div`
  height: 20vh;
  align-items: center;
  justify-content: center;
  color: grey;
  font-size: 30px;
  display: flex;
  text-align: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const DPS = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  font-size: 120px;
  color: white;
  font-weight: 700;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
