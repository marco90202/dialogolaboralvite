import styled from "styled-components";

const ContainerFooter = styled.div`
  background: #002c44;
  height: 272px;
  width: 1360px;
  margin: 98px 0px 0px 0px;
  display: flex;
`;

const TextContact = styled.li`
  /* font-family: "Fira Sans"; */
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

const TextDirection = styled.p`
  width: 240px;
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

export { ContainerFooter, TextContact, TextDirection };
