import styled from "styled-components";

const ContainerInfo = styled.div`
  display: flex;
  background: #0075b0;
  height: 352px;
  width: 1160px;
  margin-left: 100px;
  border-radius: 120px 0px;
`;

const ContentInfo = styled.div`
  display: flex;
`;

const ContentCell = styled.div`
  padding-top: 30px;
  padding-left: 64px;
`;

const Title = styled.h3`
  width: 156px;
  height: 28px;
  margin-bottom: 0px;

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

const ButtonWrite = styled.input`
  padding: 8px;
  width: 160px;
  height: 48px;
  border: 1px solid #ffffff;
  border-radius: 28px;
  background: #0075b0;
  color: #ffffff;
  margin-left: 40px;
`;

const ContentPhone = styled.div`
  padding-top: 30px;
  padding-left: 42px;
  margin: 0px;
`;

const IconPhone = styled.img`
  padding-right: 17px;
  margin-top: 10px;
`;

const ButtonPhone = styled.input`
  padding: 8px;
  width: 160px;
  height: 48px;
  border: 1px solid #ffffff;
  border-radius: 28px;
  background: #0075b0;
  color: #ffffff;
  margin-left: 40px;
  margin-top: 86px;
`;

export {
  ContainerInfo,
  ContentInfo,
  ContentCell,
  Title,
  Text,
  PhotoInfo,
  IconCell,
  ButtonWrite,
  ContentPhone,
  IconPhone,
  ButtonPhone,
};
