import styled from 'styled-components';

export const Box = styled.div`
  color: ${({ theme }) => theme.colors.primary[0]};
`;

export const Div = styled(Box)`
  background-color: ${({ theme }) => theme.colors.info[3]};
`;

export const H1 = styled(Box).attrs({ as: 'h1' })`
  font-size: 2.5rem;
  margin: 1rem 0;
`;

export const H2 = styled(Box).attrs({ as: 'h2' })``;

export const H3 = styled(Box).attrs({ as: 'h3' })``;

export const H4 = styled(Box).attrs({ as: 'h4' })``;

export const P = styled(Box).attrs({ as: 'p' })``;

export const Span = styled(Box).attrs({ as: 'span' })``;

export const A = styled(Box).attrs({ as: 'a' })``;
