import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 5%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const Div = styled.div`
  padding: 1%;
  width: 50%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
