import { FC } from 'react';
import { Div } from '@/common/AtomicElements';
import styled from 'styled-components';

const PageContainer = styled(Div)`
  height: 100%;
  display: flex;
  padding: 2rem;
`;

const PageLayout: FC = ({ children, ...props }) => {
  return <PageContainer>{children}</PageContainer>;
};

export default PageLayout;
