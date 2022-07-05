import { render } from '@testing-library/react';
import SuccModal from '..';

describe('From Modal test', () => {
  it('Succ Modal renders correctly - open', () => {
    const { baseElement } = render(
      <SuccModal
        visible={true}
        handleClose={function (): void {
          console.log('');
        }}
      />,
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('Succ Modal renders correctly - closed', () => {
    const { baseElement } = render(
      <SuccModal
        visible={false}
        handleClose={function (): void {
          console.log('');
        }}
      />,
    );
    expect(baseElement).toMatchSnapshot();
  });
});
