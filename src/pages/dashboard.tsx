import { FC, useEffect } from 'react';
import LOGO from '../images/logo.png';


const Dashboard: FC = () => {

  return (
    <header>
        <div>
            <img src={LOGO} />
        </div>
    </header>
  );
};

export default Dashboard;