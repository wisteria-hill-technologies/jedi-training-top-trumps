import { StyledBox } from '@/common/AtomicElements';
import styled from 'styled-components';

const PageContainer = styled(StyledBox)`
  min-height: 100vh;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.primary[0]};
  background: ${({ theme }) => theme.colors.background};
`;

export default PageContainer;
