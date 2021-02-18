import { render } from '../../test-utils';
import { screen } from '@testing-library/react';
import People from '@/pages/People';
import 'jest-styled-components';

describe('People Page', () => {
  it('renders the Page with list of Star Wars characters', async () => {
    render(<People />, { initialApolloState: null });
    const h1Element = screen.getByRole('heading', { name: 'Characters' });
    const h2Element = await screen.findByText('Luke Skywalker');
    expect(h1Element).toBeInTheDocument();
    expect(h2Element).toBeInTheDocument();
  });
});
