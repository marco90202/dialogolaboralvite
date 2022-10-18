import React from "react";
import Header from "../components/header/Header";
import Carousel from "../components/carousel/Carousel";
import Content from "../components/content/Content";

const Home = () => {
  return (
    <div>
      <Header />
      <Content>
        <Carousel />
      </Content>
    </div>
  );
};
export default Home;
