import styled from "styled-components";

const Button = styled.button`
  padding: 150px;
  background: blue;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Logo = styled.h2`
  text-transform: uppercase;
  color: #fff;
  padding: 10px;
  margin-left: 10px;

  :hover {
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

const Menu = styled.nav`
  width: 100%;
  height: 90px;
  /* padding: 0 10px; */
  background-color: #14547c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff;
  box-shadow: 5px 0 0px rgba(0, 0, 0, 0.6);
  position: fixed;
`;

const Menu_items = styled.ul`
  display: flex;
  margin-right: 10px;
  margin-top: 20px;
  list-style: none;
  justify-content: space-around;
  display: none;

  @media (min-width: 992px) {
    display: flex;
  }
`;

const Menu_li = styled.li`
  border-radius: 3px;
  padding: 10px 23px;
  font-weight: 300;
  font-size: 20px;
  list-style: none;
  text-transform: uppercase;
  color: #fff;

  :hover {
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

export { Button, Container, Menu, Menu_items, Menu_li, Logo };
