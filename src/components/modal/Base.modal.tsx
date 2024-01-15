import { ReactNode } from "react";
import { ModelOverlay } from "./BaseModel.styles";

type IProps = {
  children: ReactNode;
};

export const BaseModal = (props: IProps) => {
  return <ModelOverlay>{props.children}</ModelOverlay>;
};
