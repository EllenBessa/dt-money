import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["gray-900"]};

  padding: 2rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewTransactionButton = styled.button`
  padding: 0 1.5rem;
  height: 50px;

  border: 0;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme["green-500"]};
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme["green-700"]};
    transition: background-color 0.2s;
  }
`;
