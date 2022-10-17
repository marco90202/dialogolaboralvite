import styled from "styled-components";

const Side = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  .Icono {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
  }
  .Sidebar {
    position: fixed;
    right: -200px;
    transition: 1s;
  }

  .Icono:hover .Sidebar {
    right: 0px;
    transition: 1s;
  }
  @media (min-width: 992px) {
    display: none;
    .Icono {
      display: none;
    }
  }
`;
const SideContainer = styled.div`
  height: 100%;
  position: absolute;
  transition: 1s;
  width: 200px;
`;

const IconSide = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ImgSide = styled.img`
  width: 15%;
  margin-right: 20px;
  margin-top: -20px;
  padding: 9px;

  :hover {
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

const SideItems = styled.ul`
  opacity: 1;
  visibility: visible;
  padding: 0;
  background-color: #14547c;
  height: 100%;
`;

const SideList = styled.li`
  list-style: none;
  color: #fff;
  padding: 12px;
  text-transform: uppercase;
  font-size: 20px;

  :hover {
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

export { Side, SideContainer, ImgSide, IconSide, SideItems, SideList };
