import { FC } from 'react';
import styled from 'styled-components';
import { Box } from '@/common/AtomicElements';
const StyledCard = styled(Box).attrs({ as: 'div' })``;

const Card: FC = ({ children, ...props }) => (
  <StyledCard
    p={2}
    m={2}
    color="color.0"
    width="20rem"
    height="25rem"
    padding={3}
    backgroundColor="primary.3"
    fontWeight="bold"
    borderWidth={1}
    borderRadius={1}
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    textAlign="center"
    {...props}
  >
    {children}
  </StyledCard>
);

export default Card;
