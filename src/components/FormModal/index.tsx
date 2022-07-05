import { Alert, Form, Modal } from 'antd';
import Input from 'antd/lib/input/Input';
import React, { useState } from 'react';
import { requestInvite } from 'src/service/requestInvite';
import { ModelTitle } from 'src/styledComponents/ModalTitle';
import SuccModal from 'src/components/SuccModal';
import { SubmitButton } from './styled';

interface IFormModalProps {
  visible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}
interface IFormData {
  fullname: string;
  email: string;
  confirmEmail: string;
}

export const ErrorWording = {
  requireName: 'Full name is required',
  requireEmail: 'Email is required',
  requireConfirm: 'Confirm email is required',
  invalidName: 'Name must be more then 3 characters',
  invalidEmail: 'Please enter a valid email!',
  invalidConfirm: 'The two emails that you entered do not match',
};

const FormModal: React.FC<IFormModalProps> = (props) => {
  const { visible, handleCancel, handleOk } = props;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [succModalVisible, setSuccModaltVisible] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState('');
  const onFinish = async (values: IFormData) => {
    try {
      await requestInvite({
        name: values.fullname,
        email: values.email,
      });
      handleOk();
      setSuccModaltVisible(true);
    } catch (e: any) {
      setErrorMsg(e?.data.errorMessage ?? '');
    } finally {
      setLoading(false);
    }
  };
  // submit form
  const onClickSubmit = () => {
    setErrorMsg('');
    setLoading(true);
    form.submit();
  };

  const onFinishFailed = () => {
    setLoading(false);
  };

  const handleCloseSuccModal = () => {
    setSuccModaltVisible(false);
  };

  return (
    <>
      <SuccModal
        visible={succModalVisible}
        handleClose={handleCloseSuccModal}
      ></SuccModal>
      <Modal
        title={<ModelTitle> Request an invite</ModelTitle>}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered={true}
        closable={true}
        destroyOnClose={true}
        footer={null}
      >
        <Form
          form={form}
          layout="horizontal"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="fullname"
            rules={[
              { required: true, message: ErrorWording.requireName },
              () => ({
                validator(_, value) {
                  if (!value || value.trim().length >= 3) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error(ErrorWording.invalidName));
                },
              }),
            ]}
          >
            <Input placeholder="Full Name" data-testid="fullname-input" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: ErrorWording.requireEmail },
              {
                type: 'email',
                message: ErrorWording.invalidEmail,
              },
            ]}
          >
            <Input placeholder="Email" data-testid="email-input" />
          </Form.Item>
          <Form.Item
            name="confirmEmail"
            rules={[
              { required: true, message: ErrorWording.requireConfirm },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('email') == value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error(ErrorWording.invalidConfirm));
                },
              }),
            ]}
          >
            <Input placeholder="Confirm Email" data-testid="confirm-input" />
          </Form.Item>
          <Form.Item>
            <SubmitButton
              loading={loading}
              type="primary"
              size="large"
              onClick={onClickSubmit}
              data-testid="submit"
            >
              Submit
            </SubmitButton>
          </Form.Item>
          {errorMsg && <Alert type="error" message={errorMsg} showIcon />}
        </Form>
      </Modal>
    </>
  );
};

export default FormModal;
