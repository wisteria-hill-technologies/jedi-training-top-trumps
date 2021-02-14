import { FC } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Index: FC = () => {
  return (
    <div>
      <Title>Home Page</Title>
    </div>
  );
};

export default Index;
