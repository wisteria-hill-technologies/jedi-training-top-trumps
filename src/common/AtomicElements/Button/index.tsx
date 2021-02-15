import { FC } from 'react';
import styled from 'styled-components';
import { Box } from '@/common/AtomicElements';
const Button = styled(Box).attrs({ as: 'button' })``;

interface Props {
  background?: string;
  fontSize?: string;
  fontWeight?: string;
  backgroundColor?: string;
  onClick: () => void;
  bottom?: string;
}

const StyledButton: FC<Props> = (props) => (
  <Button
    p={2}
    m={2}
    width="20rem"
    height="4rem"
    color="color.0"
    background="linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);"
    fontSize={3}
    fontWeight="bold"
    borderWidth={0}
    borderRadius={1}
    boxShadow="0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)
;"
    display="inline-block"
    textAlign="center"
    style={{ cursor: 'pointer' }}
    {...props}
  />
);

export default StyledButton;
