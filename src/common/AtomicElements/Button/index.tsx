import { FC } from 'react';
import styled from 'styled-components';
import { Box } from '@/common/AtomicElements';
const Button = styled(Box).attrs({ as: 'button' })``;

interface Props {
  backgroundColor?: string;
  onClick: () => void;
}

const StyledButton: FC<Props> = (props) => (
  <Button
    p={2}
    m={2}
    color="color.0"
    backgroundColor="primary.3"
    fontWeight="bold"
    borderWidth={0}
    borderRadius={1}
    display="inline-block"
    textAlign="center"
    style={{ cursor: 'pointer' }}
    {...props}
  />
);

export default StyledButton;
