import { FC, useEffect } from 'react';
import LOGO from '../images/logo.png';
import SEARCHICON from '../icons/search.svg';

const Header: FC = () => {

  return (
    <div className='flex items-center justify-between'>
      <div>
        <img src={LOGO} className='h-[96px] ml-[85px]' />
      </div>

      <div className="panel border-[2px] border-[#47567] rounded-full bg-white py-[16px] px-[31px] flex items-center justify-center gap-[40px]">
        <p className="text-[20px] font-[Inter] font-normal">
          Learn
        </p>
        <p className="text-[20px] font-[Inter] font-normal">
          Read
        </p>
        <p className="text-[20px] font-[Inter] font-normal">
          Watch
        </p>
        <p className="text-[20px] font-[Inter] font-normal">
          Meet
        </p>
      </div>

      <div className='flex items-center justify-center mr-[40px] px-[10px] gap-[10px]'>
        <svg className='size-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <button className='bg-[#475467] w-40 h-[40px] rounded-full text-[20px] font-[Inter] bold text-white'>Sign Up</button>
        <button className='bg-[#475467] w-[40px] h-[40px] rounded-full text-[20px] font-[Inter] bold text-white'></button>
      </div>
    </div>
  );
};

export default Header;