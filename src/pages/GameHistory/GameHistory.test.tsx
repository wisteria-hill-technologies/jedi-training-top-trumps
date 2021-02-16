import { render } from '../../test-utils';
import GameHistory from '@/pages/GameHistory';
import 'jest-styled-components';
import Index from '@/pages/Index';

describe('Game History Page', () => {
  it('should match the snapshot', () => {
    const { container } = render(<GameHistory />, { initialApolloState: null });
    expect(container).toMatchSnapshot();
  });
  it.skip('should render title and subtitle', () => {
    const { container } = render(<GameHistory />, { initialApolloState: null });
    // throw new Error();
  });
  it.skip('should render the list of Game History records with selected category, winner, looser, or draw, and timestamp', () => {
    const { container } = render(<Index />, { initialApolloState: null });
    // throw new Error();
  });
});
