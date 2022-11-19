import styled from "styled-components";

const Header = styled.div`
  width: 1349px;
  height: 80px;
  background: #002c44;
  display: flex;
`;

const ImgLogo = styled.img`
  width: 32px;
  height: 40px;
  color: #ffffff;
  padding: 20px 16px 20px 100px;
`;

const ImgText = styled.img`
  width: 218px;
  height: 40px;
  color: #ffffff;
  padding: 20px 625px 20px 0px;
`;

const ListBar = styled.ul`
  display: flex;
  align-items: center;
`;

const ItemList = styled.li`
  list-style: none;
  color: #ffffff;
  width: 108px;
  height: 24px;
  padding: 28px 35px 28px 0px;
  font-size: 20px;
  text-transform: uppercase;
`;

const BodyPhoto = styled.div`
  width: 100%;
  height: 626px;

  border-radius: 0px 0px 0px 200px;
`;
export { Header, ImgLogo, ImgText, ListBar, ItemList, BodyPhoto };
