import { render } from '@testing-library/react';
import PageHeader from '../index';

it('PageHeader renders correctly', () => {
  const { baseElement } = render(<PageHeader />);
  expect(baseElement).toMatchSnapshot();
});
