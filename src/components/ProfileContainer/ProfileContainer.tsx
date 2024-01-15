"use client";

import { useTheme } from "styled-components";
import { ProfileIcon } from "../Icons/Profile.icon";
import { Wrapper } from "./ProfileContainer.styles";

type IProps = {
  width?: string;
  height?: string;
};

export const ProfileContainer = (props: IProps) => {
  const { width } = props;
  const theme = useTheme();

  return (
    <Wrapper width={width}>
      <ProfileIcon
        width="100%"
        height="100%"
        color={theme.colors.borderPrimary}
      />
    </Wrapper>
  );
};
