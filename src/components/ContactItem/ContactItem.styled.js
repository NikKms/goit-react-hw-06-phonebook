import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  gap: 8px;
  min-width: 300px;
  align-items: center;
`;

export const Name = styled.p`
  font-weight: bold;
  min-width: 100px;
`;

export const Tel = styled.p`
  color: grey;
  min-width: 100px;
`;

export const Button = styled.button`
  margin-left: auto;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    outline: none;
    box-shadow: 0 4px 10px rgba(255, 56, 56, 1);
    border-color: #ff3838;
    background-color: #ff3838;
  }
`;
