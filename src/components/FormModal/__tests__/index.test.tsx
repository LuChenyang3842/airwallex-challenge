import { render, fireEvent, cleanup } from '@testing-library/react';
import FormModal from '..';

describe('From Modal test', () => {
  let visible = true;
  const handleOk = jest.fn();
  const handleCancel = jest.fn();

  beforeAll(() => {
    // reference: https://github.com/ant-design/ant-design/issues/21096
    Object.defineProperty(window, 'matchMedia', {
      value: () => {
        return {
          matches: false,
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          addListener: () => {},
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          removeListener: () => {},
        };
      },
    });
  });
  beforeEach(() => {
    visible = true;
  });

  afterEach(cleanup);

  it('Form Modal renders correctly -- close', () => {
    visible = false;
    const { baseElement } = render(
      <FormModal
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />,
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('Form Modal renders correctly -- open with no input', () => {
    const { baseElement } = render(
      <FormModal
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />,
    );
    expect(baseElement).toMatchSnapshot();
  });
});
