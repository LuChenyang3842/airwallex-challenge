import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import FormModal, { ErrorWording } from '..';
import { screen } from '@testing-library/dom';
import { act } from 'react-dom/test-utils';

describe('From Modal test', () => {
  let visible = true;
  const handleOk = jest.fn();
  const handleCancel = jest.fn();
  const mockEmailA = 'mockEmailA@email.com';
  const mockEmailB = 'mockEmailB@email.com';
  const mockInvalidEmail = 'a';
  const mockValidName = 'mockName';
  const mockInvalidName = 'i';
  const inputByTestId = (input: string, testid: string) => {
    const node = screen.getByTestId(testid);
    fireEvent.change(node, { target: { value: input } });
  };

  const inputName = (input: string) => {
    inputByTestId(input, 'fullname-input');
  };

  const inputEmail = (input: string) => {
    inputByTestId(input, 'email-input');
  };

  const inputConfirm = (input: string) => {
    inputByTestId(input, 'confirm-input');
  };

  const clickSubmitBtn = () => {
    const submitButton = screen.getByTestId('submit');
    fireEvent.click(submitButton);
  };

  const mockValidInputs = () => {
    inputName(mockValidName);
    inputEmail(mockEmailA);
    inputConfirm(mockEmailA);
  };

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
    act(() => {
      fireEvent.click(buttonsClose[0]);
    });
    expect(handleCancel).toBeCalledTimes(1);
  });

  it('error message display - empty submission', async () => {
    const { baseElement } = render(
      <FormModal
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />,
    );
    act(() => {
      clickSubmitBtn();
    });
    await waitFor(() => {
      const erroMsgs = baseElement.getElementsByClassName(
        'ant-form-item-explain-error',
      );
      expect(erroMsgs.length).toBe(3);
      expect(erroMsgs[0].textContent).toBe(ErrorWording.requireName);
      expect(erroMsgs[1].textContent).toBe(ErrorWording.requireEmail);
      expect(erroMsgs[2].textContent).toBe(ErrorWording.requireConfirm);
    });
  });

  it('error message display - invalid name', async () => {
    const { baseElement } = render(
      <FormModal
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />,
    );
    act(() => {
      mockValidInputs();
      inputName(mockInvalidName);
      clickSubmitBtn();
    });
    await waitFor(() => {
      const erroMsgs = baseElement.getElementsByClassName(
        'ant-form-item-explain-error',
      );
      expect(erroMsgs.length).toBe(1);
      expect(erroMsgs[0].textContent).toBe(ErrorWording.invalidName);
    });
  });

  it('error message display - invalid email', async () => {
    const { baseElement } = render(
      <FormModal
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />,
    );
    act(() => {
      inputName(mockValidName);
      inputEmail(mockInvalidEmail);
      inputConfirm(mockInvalidName);
      clickSubmitBtn();
    });
    await waitFor(() => {
      const erroMsgs = baseElement.getElementsByClassName(
        'ant-form-item-explain-error',
      );
      expect(erroMsgs.length).toBe(2);
      expect(erroMsgs[0].textContent).toBe(ErrorWording.invalidEmail);
      expect(erroMsgs[0].textContent).toBe(ErrorWording.invalidEmail);
    });
  });

  it('error message display - invalid confirm', async () => {
    const { baseElement } = render(
      <FormModal
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />,
    );
    inputName(mockValidName);
    inputEmail(mockEmailA);
    inputConfirm(mockEmailB);
    clickSubmitBtn();
    await waitFor(() => {
      const erroMsgs = baseElement.getElementsByClassName(
        'ant-form-item-explain-error',
      );
      expect(erroMsgs.length).toBe(1);
      expect(erroMsgs[0].textContent).toBe(ErrorWording.invalidConfirm);
    });
  });
});
