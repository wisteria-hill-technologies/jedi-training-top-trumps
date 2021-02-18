import { render } from '../../test-utils';
import { screen, fireEvent } from '@testing-library/react';
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
      const h1Element = screen.getByRole('heading', { name: 'Jedi Training' });
      const h2Element = screen.getByRole('heading', {
        name: 'Star Wars Top Trumps'
      });
      expect(h1Element).toBeInTheDocument();
      expect(h2Element).toBeInTheDocument();
    });
    it('should render the link for user to navigate to Game History Page', () => {
      render(<Index />, { initialApolloState: null });
      const linkElement = screen.getByRole('link', {
        name: 'Game History'
      }) as HTMLAnchorElement;
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.pathname).toBe('/game-history');
    });
    it('should render two buttons for user to select 1 player or 2 players game', () => {
      render(<Index />, { initialApolloState: null });
      const onePlayerButton = screen.getByRole('button', {
        name: 'Play against Darth Vader'
      }) as HTMLButtonElement;
      const twoPlayersButton = screen.getByRole('button', {
        name: '2 Jedi Players'
      }) as HTMLButtonElement;
      expect(onePlayerButton).toBeInTheDocument();
      expect(twoPlayersButton).toBeInTheDocument();
    });
    it('should render View 2 - "You Vs Darth Vader: Select A Category" after clicking on the "Play against Darth Vader" button in View 1', () => {
      render(<Index />, { initialApolloState: null });
      const onePlayerButton = screen.getByRole('button', {
        name: 'Play against Darth Vader'
      }) as HTMLButtonElement;

      fireEvent.click(onePlayerButton);
      const h1Element = screen.getByRole('heading', {
        name: 'You Vs Darth Vader'
      });
      const h2Element = screen.getByRole('heading', {
        name: 'Select A Category'
      });
      expect(h1Element).toBeInTheDocument();
      expect(h2Element).toBeInTheDocument();
    });
    it('should render View 2 - "Jedi Vs Jedi: Select A Category" after clicking on the "2 Jedi Players" button in View 1', () => {
      render(<Index />, { initialApolloState: null });
      const twoPlayerButton = screen.getByRole('button', {
        name: '2 Jedi Players'
      }) as HTMLButtonElement;

      fireEvent.click(twoPlayerButton);
      const h1Element = screen.getByRole('heading', {
        name: 'Jedi Vs Jedi'
      });
      const h2Element = screen.getByRole('heading', {
        name: 'Select A Category'
      });
      expect(h1Element).toBeInTheDocument();
      expect(h2Element).toBeInTheDocument();
    });
  });
  describe('View 2 - Select A Category View', () => {
    it('should render two buttons for user to select People or Starships Category', () => {
      render(<Index />, { initialApolloState: null });
      const onePlayerButton = screen.getByRole('button', {
        name: 'Play against Darth Vader'
      }) as HTMLButtonElement;

      fireEvent.click(onePlayerButton);
      const peopleCategoryButton = screen.getByRole('button', {
        name: 'People'
      }) as HTMLButtonElement;
      const starshipsCategoryButton = screen.getByRole('button', {
        name: 'Starships'
      }) as HTMLButtonElement;
      expect(peopleCategoryButton).toBeInTheDocument();
      expect(starshipsCategoryButton).toBeInTheDocument();
    });
    it('should render View 3: Single Player - Cards View for Selected Category "People" after clicking on "People" button in View 2', () => {
      render(<Index />, { initialApolloState: null });
      const onePlayerButton = screen.getByRole('button', {
        name: 'Play against Darth Vader'
      }) as HTMLButtonElement;

      fireEvent.click(onePlayerButton);
      const peopleCategoryButton = screen.getByRole('button', {
        name: 'People'
      }) as HTMLButtonElement;
      fireEvent.click(peopleCategoryButton);
      const h1Element = screen.getByRole('heading', {
        name: 'You Vs Darth Vader'
      });
      const h2Element = screen.getByRole('heading', {
        name: 'Category: People'
      });
      expect(h1Element).toBeInTheDocument();
      expect(h2Element).toBeInTheDocument();
    });
    it('should render View 3: Single Player - Cards View for Selected Category "Starships" after clicking on "Starships" button in View 2', () => {
      render(<Index />, { initialApolloState: null });
      const onePlayerButton = screen.getByRole('button', {
        name: 'Play against Darth Vader'
      }) as HTMLButtonElement;

      fireEvent.click(onePlayerButton);
      const peopleCategoryButton = screen.getByRole('button', {
        name: 'Starships'
      }) as HTMLButtonElement;
      fireEvent.click(peopleCategoryButton);
      const h1Element = screen.getByRole('heading', {
        name: 'You Vs Darth Vader'
      });
      const h2Element = screen.getByRole('heading', {
        name: 'Category: Starships'
      });
      expect(h1Element).toBeInTheDocument();
      expect(h2Element).toBeInTheDocument();
    });
    it('should render View 3: 2 Players - Cards View for Selected Category "People" after clicking on "People" button in View 2', () => {
      render(<Index />, { initialApolloState: null });
      const onePlayerButton = screen.getByRole('button', {
        name: '2 Jedi Players'
      }) as HTMLButtonElement;

      fireEvent.click(onePlayerButton);
      const peopleCategoryButton = screen.getByRole('button', {
        name: 'People'
      }) as HTMLButtonElement;
      fireEvent.click(peopleCategoryButton);
      const h1Element = screen.getByRole('heading', {
        name: 'Jedi Vs Jedi'
      });
      const h2Element = screen.getByRole('heading', {
        name: 'Category: People'
      });
      expect(h1Element).toBeInTheDocument();
      expect(h2Element).toBeInTheDocument();
    });
    it('should render View 3: 2 Players - Cards View for Selected Category "Starships" after clicking on "Starships" button in View 2', () => {
      render(<Index />, { initialApolloState: null });
      const onePlayerButton = screen.getByRole('button', {
        name: '2 Jedi Players'
      }) as HTMLButtonElement;

      fireEvent.click(onePlayerButton);
      const peopleCategoryButton = screen.getByRole('button', {
        name: 'Starships'
      }) as HTMLButtonElement;
      fireEvent.click(peopleCategoryButton);
      const h1Element = screen.getByRole('heading', {
        name: 'Jedi Vs Jedi'
      });
      const h2Element = screen.getByRole('heading', {
        name: 'Category: Starships'
      });
      expect(h1Element).toBeInTheDocument();
      expect(h2Element).toBeInTheDocument();
    });
  });
  describe('View 3 - Cards View for Selected Category', () => {
    it('Single Player Game: should render two cards without item details', () => {
      render(<Index />, { initialApolloState: null });
      const onePlayerButton = screen.getByRole('button', {
        name: 'Play against Darth Vader'
      }) as HTMLButtonElement;

      fireEvent.click(onePlayerButton);
      const peopleCategoryButton = screen.getByRole('button', {
        name: 'People'
      }) as HTMLButtonElement;
      fireEvent.click(peopleCategoryButton);

      const cardTitle1 = screen.getByRole('heading', {
        name: 'Your Card'
      });
      const cardTitle2 = screen.getByRole('heading', {
        name: "Darth Vader's Card"
      });

      const flipCardButtons = screen.getAllByRole('button', {
        name: 'Flip Card'
      }) as HTMLButtonElement[];

      expect(cardTitle1).toBeInTheDocument();
      expect(cardTitle2).toBeInTheDocument();
      expect(flipCardButtons.length).toBe(1);
    });
    it('2 Players Game: should render two cards without item details', () => {
      render(<Index />, { initialApolloState: null });
      const twoPlayerButton = screen.getByRole('button', {
        name: '2 Jedi Players'
      }) as HTMLButtonElement;

      fireEvent.click(twoPlayerButton);
      const peopleCategoryButton = screen.getByRole('button', {
        name: 'People'
      }) as HTMLButtonElement;
      fireEvent.click(peopleCategoryButton);

      const cardTitle1 = screen.getByRole('heading', {
        name: "Jedi Player 1's Card"
      });
      const cardTitle2 = screen.getByRole('heading', {
        name: "Jedi Player 2's Card"
      });

      const flipCardButtons = screen.getAllByRole('button', {
        name: 'Flip Card'
      }) as HTMLButtonElement[];

      expect(cardTitle1).toBeInTheDocument();
      expect(cardTitle2).toBeInTheDocument();
      expect(flipCardButtons.length).toBe(2);
    });
    it('Single Player Game: should flip the card and display item details after clicking the "Flip Card" button', async () => {
      render(<Index />, { initialApolloState: null });
      const onePlayerButton = screen.getByRole('button', {
        name: 'Play against Darth Vader'
      }) as HTMLButtonElement;

      fireEvent.click(onePlayerButton);
      const peopleCategoryButton = screen.getByRole('button', {
        name: 'People'
      }) as HTMLButtonElement;
      fireEvent.click(peopleCategoryButton);

      const flipCardButton = screen.getByRole('button', {
        name: 'Flip Card'
      }) as HTMLButtonElement;
      fireEvent.click(flipCardButton);
      const card1Text = await screen.findByText('Height: 167cm');
      expect(card1Text).toBeInTheDocument();
    });
    it("Single Player Game: should flip the opponent's card and display item details automatically and show Result after player 1's card is flipped", async () => {
      render(<Index />, { initialApolloState: null });
      const onePlayerButton = screen.getByRole('button', {
        name: 'Play against Darth Vader'
      }) as HTMLButtonElement;

      fireEvent.click(onePlayerButton);
      const peopleCategoryButton = screen.getByRole('button', {
        name: 'People'
      }) as HTMLButtonElement;
      fireEvent.click(peopleCategoryButton);

      const flipCardButton = screen.getByRole('button', {
        name: 'Flip Card'
      }) as HTMLButtonElement;
      fireEvent.click(flipCardButton);
      const card1Text = await screen.findByText('Height: 178cm');
      const card2Text = await screen.findByText('Height: 183cm');
      const playAgainButton = screen.getByRole('button', {
        name: 'Play Again'
      }) as HTMLButtonElement;
      expect(card1Text).toBeInTheDocument();
      expect(card2Text).toBeInTheDocument();
      const resultText = screen.getByText('You Lost! Darth Vader WON!');
      const linkElement = screen.getByRole('link', {
        name: 'Game History'
      }) as HTMLAnchorElement;
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.pathname).toBe('/game-history');
      expect(resultText).toBeInTheDocument();
      expect(playAgainButton).toBeInTheDocument();
    });
    it('2 Players Game: After two players flip cards, show Game Result', async () => {
      render(<Index />, { initialApolloState: null });
      const twoPlayerButton = screen.getByRole('button', {
        name: '2 Jedi Players'
      }) as HTMLButtonElement;

      fireEvent.click(twoPlayerButton);
      const peopleCategoryButton = screen.getByRole('button', {
        name: 'People'
      }) as HTMLButtonElement;
      fireEvent.click(peopleCategoryButton);

      const cardTitle1 = screen.getByRole('heading', {
        name: "Jedi Player 1's Card"
      });
      const cardTitle2 = screen.getByRole('heading', {
        name: "Jedi Player 2's Card"
      });

      const flipCardButtons = screen.getAllByRole('button', {
        name: 'Flip Card'
      }) as HTMLButtonElement[];

      expect(cardTitle1).toBeInTheDocument();
      expect(cardTitle2).toBeInTheDocument();
      expect(flipCardButtons.length).toBe(2);

      fireEvent.click(flipCardButtons[0]);
      fireEvent.click(flipCardButtons[1]);

      const card1Text = await screen.findByText('Height: 190cm');
      const card2Text = await screen.findByText('Height: 180cm');
      const playAgainButton = screen.getByRole('button', {
        name: 'Play Again'
      }) as HTMLButtonElement;
      expect(card1Text).toBeInTheDocument();
      expect(card2Text).toBeInTheDocument();
      const resultText = screen.getByText(
        /Jedi Player 1 WON!/
      );
      const linkElement = screen.getByRole('link', {
        name: 'Game History'
      }) as HTMLAnchorElement;
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.pathname).toBe('/game-history');
      expect(resultText).toBeInTheDocument();
      expect(playAgainButton).toBeInTheDocument();
    });
  });
});
