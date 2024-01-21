"use client";

import { useTheme } from "styled-components";
import { ProfileIcon } from "../Icons/Profile.icon";
import { Container } from "./Profile.styles";

type IProps = {
  width?: string;
  height?: string;
};

export const Profile = (props: IProps) => {
  const { width } = props;
  const theme = useTheme();

  return (
    <Container width={width}>
      <ProfileIcon
        width="100%"
        height="100%"
        color={theme.colors.border.borderGray}
      />
    </Container>
  );
};
