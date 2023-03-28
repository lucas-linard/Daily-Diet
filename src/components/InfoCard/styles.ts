import styled from "styled-components/native";

export type ContainerStyleProps = {
    fullwidth?: boolean;
    type?: "REGULAR" | "HEALTHY" | "UNHEALTHY";

}

export const Container = styled.View<ContainerStyleProps>`
    flex:1;
    justify-content: center;
    align-items: center;

    min-height: ${({ fullwidth }) => fullwidth ? 89 : 107}px;
    max-height: ${({ fullwidth }) => fullwidth ? 89 : 107}px;

    width: ${({ fullwidth }) => fullwidth ? "100%" : "auto"};

    border-radius: 8px;
    padding: 16px;
    gap: 8px;

    background-color: ${({ theme, type }) => {
    switch (type) {
      case "REGULAR":
        return theme.COLORS.GRAY600;
      case "HEALTHY":
        return theme.COLORS.GREEN_LIGHT;
      case "UNHEALTHY":
        return theme.COLORS.RED_LIGHT;
    }
  }};

`