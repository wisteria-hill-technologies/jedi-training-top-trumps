import { FC } from 'react';
import PageContainer from '@/common/PageLayout/PageContainer';

const PageLayout: FC = ({ children, ...props }) => {
  return <PageContainer>{children}</PageContainer>;
};

export default PageLayout;
