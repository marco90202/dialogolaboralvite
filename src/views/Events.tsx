import React from "react";
import Header from "../components/header/Header";
import Content from "../components/content/Content";

const Events = () => {
  return (
    <div>
      <Header />
      <Content>
        <div style={{ background: "green" }}>estoy en eventos</div>
      </Content>
    </div>
  );
};
export default Events;
