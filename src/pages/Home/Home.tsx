import { Layout } from 'antd';
import React, { useState } from 'react';
import { PageContent, Title, SubTitle, RequestButton } from './styled';
import PageHeader from 'src/components/PageHeader';
import PageFooter from 'src/components/PageFooter';
import { Spacer } from 'src/styledComponents/spacer';
import FormModal from 'src/components/FormModal';
const Home: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const setModalVisible = () => {
    setVisible(true);
  };

  const setModalInvisible = () => {
    setVisible(false);
  };

  return (
    <>
      <Layout>
        <PageHeader></PageHeader>
        <PageContent>
          <Title>A better way</Title>
          <Title> to enjoy every day</Title>
          <Spacer height={20}></Spacer>
          <SubTitle>Be the first to known when we launch</SubTitle>
          <Spacer height={20}></Spacer>
          <RequestButton shape="round" onClick={setModalVisible}>
            Request an invite
          </RequestButton>
        </PageContent>
        <PageFooter></PageFooter>
        <FormModal
          visible={visible}
          handleOk={setModalInvisible}
          handleCancel={setModalInvisible}
        ></FormModal>
      </Layout>
    </>
  );
};

export default Home;
