import { render } from '../../test-utils';
import GameHistory from '@/pages/GameHistory';
import 'jest-styled-components';
import Index from '@/pages/Index';
import { screen, waitFor } from '@testing-library/react';

describe('Game History Page', () => {
  it('should match the snapshot', () => {
    const { container } = render(<GameHistory />, { initialApolloState: null });
    expect(container).toMatchSnapshot();
  });
  it('should render title and subtitle', () => {
    render(<GameHistory />, { initialApolloState: null });
    const h1Element = screen.getByRole('heading', { name: 'Game History' });
    const h2Element = screen.getByRole('heading', {
      name: 'Star Wars Top Trumps'
    });
    expect(h1Element).toBeInTheDocument();
    expect(h2Element).toBeInTheDocument();
  });
  it.skip('should render the list of Game History records with selected category, winner, looser, or draw, and timestamp', async () => {
    render(<GameHistory />, { initialApolloState: null });
    await waitFor(() => {
      const gameModeText = screen.getByText(/Game Mode/);
      expect(gameModeText).toBeInTheDocument();
    });
  });
});
