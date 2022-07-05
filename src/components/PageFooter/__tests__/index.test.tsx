import { render } from '@testing-library/react';
import PageFooter from '../index';

it('PageFooter renders correctly', () => {
  const { baseElement } = render(<PageFooter />);
  expect(baseElement).toMatchSnapshot();
});
