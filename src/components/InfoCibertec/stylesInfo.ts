import styled from "styled-components";

const ContainerInfo = styled.div`
  display: flex;
  background: #0075b0;
  height: 352px;
  width: 1160px;
  margin-left: 100px;
  border-radius: 120px 0px;
`;

/* const InfoSmart = styled.div`
  display: flex;
`; */

const Title = styled.h3`
  width: 156px;
  height: 28px;
  margin-bottom: 0px;
  /* font-family: 'Fira Sans'; */
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.2px;
  color: #ffffff;
`;

const Text = styled.p`
  width: 240px;
  height: 72px;
  /* font-family: "Fira Sans"; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.4px;
  color: #ffffff;
  padding-left: 40px;
  padding-top: 0px;
  padding-bottom: -9px;
  margin-top: 8px;
`;

const PhotoInfo = styled.img`
  background: #ffffff;
  margin-left: 54px;
`;

const IconCell = styled.img`
  padding-right: 20px;
  margin-top: 10px;
`;

const IconPhone = styled.img`
  padding-right: 17px;
  margin-top: 10px;
`;
export { ContainerInfo, Title, Text, PhotoInfo, IconCell, IconPhone };
