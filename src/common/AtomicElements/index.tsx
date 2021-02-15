import styled from 'styled-components';
import {
  typography,
  TypographyProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  color,
  ColorProps,
  grid,
  GridProps,
  background,
  BackgroundProps,
  border,
  BorderProps,
  position,
  PositionProps,
  shadow,
  ShadowProps
} from 'styled-system';

type StyledProps = SpaceProps &
  TypographyProps &
  LayoutProps &
  FlexboxProps &
  ColorProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps;

export const Box = styled.div<StyledProps>`
  ${typography}
  ${space}
  ${layout}
  ${flexbox}
  ${color}
  ${grid}
  ${background}
  ${border}
  ${position}
  ${shadow}
`;

export const StyledBox = styled(Box)`
`;

export const Div = styled(StyledBox).attrs({ as: 'div' })``;

export const H1 = styled(Box).attrs({ as: 'h1' })`
  font-size: 3rem;
  margin: 1rem 0;
  background-color: inherit;
`;

export const H2 = styled(StyledBox).attrs({ as: 'h2' })`
  font-size: 2.5rem;
  background-color: inherit;
`;

export const H3 = styled(StyledBox).attrs({ as: 'h3' })`
  background-color: inherit;
`;

export const H4 = styled(StyledBox).attrs({ as: 'h4' })`
  background-color: inherit;
`;

export const P = styled(StyledBox).attrs({ as: 'p' })`
  background-color: inherit;
`;

export const Span = styled(StyledBox).attrs({ as: 'span' })`
  background-color: inherit;
`;

export const A = styled(StyledBox).attrs({ as: 'a' })`
  background-color: inherit;
  color: ${({ theme }) => theme.colors.info[3]};
  &:hover {
    color: ${({ theme }) => theme.colors.primary[3]};
  }
`;
