import { type JSX } from "react";
import { StyledLayout } from "./styles";

type LayoutPageProps = {
  children: JSX.Element;
};

export const LayoutPage = ({ children }: LayoutPageProps) => {
  return <StyledLayout>{children}</StyledLayout>;
};
