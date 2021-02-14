import { render } from '../../test-utils';
import { screen } from '@testing-library/react';
import Index from '@/pages/Index';
import 'jest-styled-components';

describe('Index Page', () => {
  describe('View 1 - Initial View', () => {
    it('should match the snapshot', () => {
      const { container } = render(<Index />, { initialApolloState: null });
      expect(container).toMatchSnapshot();
    });
    it('should render title and subtitle', () => {
      render(<Index />, { initialApolloState: null });
      const h1Element = screen.getByRole('h1', { name: 'hello' });
      expect(h1Element).toBeInTheDocument();
    });
    it.skip('should render the link for user to navigate to Game History Page', () => {
      const { container } = render(<Index />, { initialApolloState: null });
      throw new Error();
    });
    it.skip('should render two buttons for user to select 1 player or 2 players game', () => {
      const { container } = render(<Index />, { initialApolloState: null });
      throw new Error();
    });
    it.skip('should render View 2 - "Select A Category" after clicking on either button in View 1', () => {
      throw new Error();
    });
  });
  describe.skip('View 2 - Select A Category View', () => {
    it('should render title', () => {
      const { container } = render(<Index />, { initialApolloState: null });
      // throw new Error();
    });
    it('should render two buttons for user to select People or Starships Category', () => {
      const { container } = render(<Index />, { initialApolloState: null });
      // throw new Error();
    });
    it('should render View 3 - Cards View for Selected Category after clicking on either button in View 2', () => {
      // throw new Error();
    });
  });
  describe.skip('View 3 - Cards View for Selected Category', () => {
    it('should render title for the category', () => {
      const { container } = render(<Index />, { initialApolloState: null });
      // throw new Error();
    });
    it('should render two cards without item details', () => {
      const { container } = render(<Index />, { initialApolloState: null });
      // throw new Error();
    });
    it('should render one "Flip Card" button for one player game', () => {
      // throw new Error();
    });
    it('should render two "Flip Card" button for two player game', () => {
      // throw new Error();
    });
    it('should flip the card and display item details after clicking the "Flip Card" button', () => {
      // throw new Error();
    });
    it("Player 1 Game: should flip the oponent's card and display item details automatically after player 1's card is flipped", () => {
      // throw new Error();
    });
  });
  describe.skip('View 3 with game result', () => {
    it('should render the game result to show who won, lost or it was draw after all the cards are flipped', () => {
      // throw new Error();
    });
    it('should render "Play Again" button to go back to Initial View (View 1)', () => {
      const { container } = render(<Index />, { initialApolloState: null });
      // throw new Error();
    });
    it('should render the link for user to navigate to Game History Page', () => {
      const { container } = render(<Index />, { initialApolloState: null });
      // throw new Error();
    });
  });
});