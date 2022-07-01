import { Layout } from 'antd';
import React from 'react';
import { PageContent, Title, SubTitle } from './styled';
import PageHeader from 'src/components/PageHeader';
import PageFooter from 'src/components/PageFooter';
const Home: React.FC = () => {
  return (
    <Layout>
      <PageHeader></PageHeader>
      <PageContent>
        <Title>A better way</Title>
        <Title> to enjoy every day</Title>
      </PageContent>
      <PageFooter></PageFooter>
    </Layout>
  );
};

export default Home;
