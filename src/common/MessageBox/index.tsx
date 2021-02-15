import { FC } from 'react';
import styled from 'styled-components';
import { Box } from '@/common/AtomicElements';
// const StylableBox = styled(Box).attrs({ as: 'div' })``;
import { variant } from 'styled-system';

const BoxWithMessageVariants = styled(Box)(
  variant({
    variants: {
      primary: {
        color: 'primary.3',
        borderColor: 'primary.3',
        bg: 'primary.0'
      },
      info: {
        color: 'info.3',
        borderColor: 'info.3',
        bg: 'info.0'
      },
      warning: {
        color: 'warning.3',
        borderColor: 'warning.3',
        bg: 'warning.0'
      },
      danger: {
        color: 'danger.3',
        borderColor: 'danger.3',
        bg: 'danger.0'
      }
    }
  })
);

interface Props {
  variant: string;
  message: string;
}

const MessageBox: FC<Props> = ({ message, ...props }) => {
  return (
    <BoxWithMessageVariants
      py={3}
      pr={3}
      pl={2}
      fontSize={6}
      borderLeftStyle="solid"
      borderRightStyle="solid"
      borderLeftWidth={3}
      style={{
        boxSizing: 'border-box'
      }}
      {...props}
    >
      {message}
    </BoxWithMessageVariants>
  );
};

export default MessageBox;
