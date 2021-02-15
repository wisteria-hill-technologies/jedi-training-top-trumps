import { StyledBox } from '@/common/AtomicElements';
import styled from 'styled-components';

const PageContainer = styled(StyledBox)`
  height: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.primary[0]};
  background: ${({ theme }) => theme.colors.background};
`;

export default PageContainer;
