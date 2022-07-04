import { Modal } from 'antd';
import React from 'react';
import { VerticalFlexWrapper } from 'src/styledComponents/FlexWrapper';
import { ModelTitle } from 'src/styledComponents/ModalTitle';
import { Spacer } from 'src/styledComponents/Spacer';
import { FinishButton, SuccessText, SuccessTextWrapper } from './styled';

interface ISuccModalProps {
  visible: boolean;
  handleClose: () => void;
}

const SuccModal: React.FC<ISuccModalProps> = (props) => {
  const { visible, handleClose } = props;

  return (
    <>
      <Modal
        title={<ModelTitle> All Done</ModelTitle>}
        visible={visible}
        onOk={handleClose}
        onCancel={handleClose}
        centered={true}
        closable={true}
        destroyOnClose={true}
        footer={null}
      >
        <VerticalFlexWrapper>
          <SuccessTextWrapper>
            <SuccessText>
              You will be one of the first to experience Broccol &amp; Co. when
              we launch
            </SuccessText>
          </SuccessTextWrapper>
          <Spacer height={30}></Spacer>
          <FinishButton onClick={handleClose}>ok </FinishButton>
        </VerticalFlexWrapper>
      </Modal>
    </>
  );
};

export default SuccModal;
