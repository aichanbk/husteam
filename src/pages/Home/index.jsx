import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import Carousel from "../../components/Carousel/Carousel";
import Navbar from "../../components/Navbar";
import Transition from "../../components/Transition";
import { AuthContext } from "../../context/AuthContext";
import logger from "../../utils/logger";

const Home = () => {
  const { user, dispatch } = useContext(AuthContext);
  logger.debug(user);

  return (
    <Transition
      styles={"flex flex-col min-h-screen"}
      direction="left"
      duration={1}
      distance={100}
    >
      <div className="mx-4 md:mx-6 lg:mx-10 4xl:max-w-[1980px] 4xl:mx-auto">
        <Navbar />
      </div>
      <div className="container mx-auto px-4 flex flex-grow flex-col">
        <div className="flex flex-col items-center flex-grow">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
            Welcome to HUSTeam
          </h1>
          <p className="text-white text-center mt-2 pb-5">
            HUSTeam is a website for gamers to buy with the best price
          </p>
        </div>
        <div className="flex items-center flex-grow mb-16">
          <Carousel />
        </div>
        <div>
          <a
            className="capitalize btn btn-ghost pr-0 md:pr-4"
            href="https://github.com/nthhaf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white text-md lg:text-lg mr-1 md:mr-2" />
            <h3 className="font-bold">nemo do that</h3>
          </a>
        </div>
      </div>
    </Transition>
  );
};

export default Home;
