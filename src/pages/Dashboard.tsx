import { FC, useEffect } from 'react';
import Header from './Header';
import MainComponent from './homepage/MainComponent';
import FlowingBar from './homepage/FlowingBar';
import ValueDriven from './homepage/ValueDriven';
const Dashboard: FC = () => {

  return (
    <div className='mx-5 pb-5'>
      <Header />
      <MainComponent />
      <FlowingBar />
      <ValueDriven />
    </div>
  );
};

export default Dashboard;