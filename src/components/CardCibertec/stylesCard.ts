import styled from "styled-components";

const ContentCard = styled.div`
  background: #f8fafd;
  width: 100%;
  padding-top: 96px;
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-gap: 40px;
`;

const ContainerCard = styled.div`
  /* position: absolute; */
  width: 200px;
  height: 232px;
  background: #002c44;
  /* margin-top: 96px; */
  background: #ffffff;
  box-shadow: 4px 4px 20px rgba(139, 148, 167, 0.1);
  border-radius: 16px;
  /* transform: rotate(-180deg); */
`;

const Inscription = styled.img`
  height: 51px;
  width: 55px;
  padding: 38px 0px 20px 20px;

  border-radius: 0px;
  color: #004165;
`;

const ContentArrow = styled.div`
  display: flex;
`;

const TextInscription = styled.p`
  width: 120px;
  height: 56px;
  padding-left: 20px;
  padding-top: 0px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.2px;
  color: #004165;
`;

const Arrow = styled.img`
  color: #009aa6;
  padding-bottom: 21px;
  padding-left: 18px;
`;

export {
  ContentCard,
  ContainerCard,
  Inscription,
  ContentArrow,
  TextInscription,
  Arrow,
};
