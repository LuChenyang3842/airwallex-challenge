import { FC } from 'react';
import { Footer, FooterText } from './styled';

const PageFooter: FC = () => {
  return (
    <Footer>
      <FooterText>Made with &hearts; in Melbourne </FooterText>
      <FooterText>
        &copy; 2016 Broccoli &amp; Co. All Rights Reserved.{' '}
      </FooterText>
    </Footer>
  );
};

export default PageFooter;
