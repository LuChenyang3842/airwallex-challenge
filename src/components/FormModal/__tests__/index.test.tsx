import { render, fireEvent, cleanup } from '@testing-library/react';
import FormModal from '..';
import { screen } from '@testing-library/dom';
import { act } from 'react-dom/test-utils';
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

  it('Form Modal renders correctly -- Responsive render', () => {
    window.innerWidth = 1200;
    fireEvent(window, new Event('resize'));
    const { baseElement: Large } = render(
      <FormModal
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />,
    );
    expect(Large).toMatchSnapshot();

    window.innerWidth = 768;
    fireEvent(window, new Event('resize'));
    const { baseElement: small } = render(
      <FormModal
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />,
    );
    expect(small).toMatchSnapshot();

    window.innerWidth = 400;
    fireEvent(window, new Event('resize'));
    const { baseElement: extraSmall } = render(
      <FormModal
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />,
    );
    expect(extraSmall).toMatchSnapshot();
  });

  it('handle cancel correctly invoked', () => {
    const { baseElement } = render(
      <FormModal
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />,
    );

    const buttonsClose = baseElement.getElementsByClassName('ant-modal-close');
    expect(buttonsClose.length).toBe(1);
    fireEvent.click(buttonsClose[0]);
    expect(handleCancel).toBeCalledTimes(1);
  });
});
