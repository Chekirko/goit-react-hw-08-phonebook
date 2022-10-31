import styled from '@emotion/styled';

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  background-color: black;
  color: white;
  padding: 10px;
  border-radius: 30%;
`;

export const DeleteBtn = styled.button`
  display: block;
  cursor: pointer;
  background-color: #ff7a05;
`;
