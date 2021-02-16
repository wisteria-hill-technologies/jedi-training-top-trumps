import { FC } from 'react';
import styled from 'styled-components';
import { Box } from '@/common/AtomicElements';
const StylableBox = styled(Box).attrs({ as: 'div' })``;

const Card: FC = ({ children, ...props }) => (
  <StylableBox
    p={2}
    m={2}
    color="color.0"
    width="20rem"
    height="25rem"
    padding={3}
    backgroundColor="primary.2"
    fontSize={4}
    fontWeight="bold"
    borderWidth={1}
    borderRadius={1}
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    textAlign="center"
    position="relative"
    {...props}
  >
    {children}
  </StylableBox>
);

export default Card;
