import styled from "styled-components";

const Content = styled.div`
  width: 400px;
  height: 352px;
  padding: 98px 80px 24px 100px;
  background: #f8fafd;
`;

const TextOne = styled.span`
  width: 400px;
  height: 352px;
  font-style: normal;
  font-weight: 490;
  font-size: 48px;
  line-height: 69px;
  text-transform: uppercase;
  color: #002c44;
`;

const TextTwo = styled.p`
  width: 398px;
  height: 132px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #565656;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: 160px;
  height: 56px;
  background: #009aa6;
  border-radius: 28px;
  border: 0px;
  color: #ffffff;
  font-style: normal;
  font-weight: 450;
  font-size: 20px;
  line-height: 29px;
`;

export { Content, TextOne, TextTwo, Button };
