import styled from "styled-components";

const ContainerFooter = styled.div`
  background: #002c44;
  height: 272px;
  width: 1360px;
  margin: 98px 0px 0px 0px;
  display: flex;
  justify-content: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LogoCibertec = styled.div`
  margin-top: 30px;
`;

const IconCibertec = styled.img`
  padding-top: 25px;
  padding-left: 74px;
`;

const ContentNetwork = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 80px;
  padding-left: 50px;
`;

const ListNetwork = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const ContentList = styled.ul`
  padding-left: 108px;
  padding-top: 40px;
`;

const TextContact = styled.li`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  list-style: none;
  height: 20px;
  letter-spacing: -0.4px;
  text-decoration-line: underline;
  color: #ffffff;
  padding-bottom: 8px;
`;

const ContentLink = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextDirection = styled.p`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 48px;
  padding-top: 36px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  letter-spacing: -0.4px;
  color: #ffffff;
`;

export {
  ContainerFooter,
  FooterContent,
  LogoCibertec,
  IconCibertec,
  ContentNetwork,
  ListNetwork,
  ContentList,
  TextContact,
  ContentLink,
  TextDirection,
};
