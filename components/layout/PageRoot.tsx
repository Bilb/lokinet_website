import styled from "styled-components";

const StyledPageRoot = styled.div`
  background-color: var(--color-background);
  color: var(--color-text);
  width: 100%;
  height: 100%;
`;

export const PageRoot = (props: { children: React.ReactNode }) => {
  return <StyledPageRoot>{props.children}</StyledPageRoot>;
};
