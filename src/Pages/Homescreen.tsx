import Hero from "./Hero";
import Frameworks from "./Framework";
import { Services } from "./Services";
import Affliate from "./Affliate";
import { Blog } from "./Blog";
import Develop from "./Develop";
import Mmm from "./Max";

export const Homescreen = () => {
  return (
    <div>
      <Hero />
      <Affliate />
      <Develop />
      <Frameworks />
      <Services />
      <Blog />
      <Mmm />
    </div>
  );
};
