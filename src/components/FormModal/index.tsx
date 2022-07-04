import { Alert, Form, Modal } from 'antd';
import Input from 'antd/lib/input/Input';
import React, { useState } from 'react';
import { requestInvite } from 'src/service/api';
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

const FormModal: React.FC<IFormModalProps> = (props) => {
  const { visible, handleCancel, handleOk } = props;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [succModalVisible, setSuccModaltVisible] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState('');
  const onFinish = async (values: IFormData) => {
    try {
      const res = await requestInvite({
        name: values.fullname,
        email: values.email,
      });
      console.log('res', res);
      handleOk();
      setSuccModaltVisible(true);
    } catch (e: any) {
      console.log('e: ', e);
      setErrorMsg(e?.data.errorMessage ?? '');
    } finally {
      setLoading(false);
    }
  };
  // submit form
  const onClickSubmit = () => {
    console.log('click submit');
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
              { required: true, message: 'Full name is required' },
              () => ({
                validator(_, value) {
                  if (!value || value.trim().length >= 3) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('Name must be more then 3 characters'),
                  );
                },
              }),
            ]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Email is required' },
              {
                type: 'email',
                message: 'Please enter a correct email!',
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="confirmEmail"
            rules={[
              { required: true, message: 'Confirm email is required' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('email') == value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('The two emails that you entered do not match'),
                  );
                },
              }),
            ]}
          >
            <Input placeholder="Confirm Email" />
          </Form.Item>
          <Form.Item>
            <SubmitButton
              loading={loading}
              type="primary"
              size="large"
              onClick={onClickSubmit}
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
