import { type JSX } from "react";
import { StyledLayout, StyledTaskLayout } from "./styles";

type LayoutPageProps = {
  children: JSX.Element;
};

export const LayoutPage = ({ children }: LayoutPageProps) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export const LayoutTaskPage = ({ children }: LayoutPageProps) => {
  return <StyledTaskLayout>{children}</StyledTaskLayout>;
};