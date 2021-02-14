import { render } from '../../test-utils';
import Index from '@/pages/Index';
import 'jest-styled-components';

describe('Index page', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Index />, { initialApolloState: null });
    expect(container).toMatchSnapshot();
  });
  // it('should render title and subtitle', () => {});
});
