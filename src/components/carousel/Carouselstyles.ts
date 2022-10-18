import styled from "styled-components";

const Carrusel = styled.div`
  /* margin: auto; */
  width: 100%;
  height: 600px;
  overflow: hidden;
  ul {
    display: flex;
    padding: 0;
    margin: 0;
    animation: cambio 20s infinite alternate linear;
    width: 400%;
  }
  li {
    width: 100%;
    list-style: none;
  }
  img {
    width: 100%;
    height: 100vh;
    background-origin: border-box;
    background-size: cover;
    background-position: center;
  }
`;

export { Carrusel };
