import React from "react";
import { Container } from "./Contentstyles";

interface ContentProps {
  children: any;
}
const Content = (props: ContentProps) => {
  const { children } = props;
  return <Container>{children}</Container>;
};
export default Content;
