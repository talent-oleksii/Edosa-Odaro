import { FC, useEffect } from 'react';
import Header from './Header';
import MainComponent from './homepage/MainComponent';
import FlowingBar from './homepage/FlowingBar';
const Dashboard: FC = () => {

  return (
    <div>
      <Header />
      <MainComponent />
      <FlowingBar />
    </div>
  );
};

export default Dashboard;