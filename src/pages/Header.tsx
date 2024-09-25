import { FC, useEffect } from 'react';
import LOGO from '../assets/images/logo.png';
import SEARCHICON from '../assets/svg/search.svg';
import DefaultButton from '../components/buttons/DefaultButton';

const links: Array<{ text: string, link: string }> = [
  {
    text: "Learn",
    link: "",
  },
  {
    text: "Read",
    link: "",
  },
  {
    text: "Watch",
    link: "",
  },
  {
    text: "Meet",
    link: "",
  },
]

const Header: FC = () => {
  return (
    <div className='my-2 sm:my-0 flex items-center justify-between relative'>
      <div className='hidden sm:block'>
        <img src={LOGO} className='h-[96px] ml-[85px]' />
      </div>

      <div className="panel border-2 border-text-color rounded-full bg-white py-0.5 sm:py-3 px-4 sm:px-8 flex items-center justify-center gap-5 sm:gap-10 ">
        {links.map((item, index) => (
          <p key={index} className="text-xs sm:text-[20px] font-[Inter] font-normal">
            {item.text}
          </p>
        ))}
      </div>

      <div className='flex items-center justify-center mr-2 sm:mr-10 px-1 sm:px-3 gap-3'>
        <img src={SEARCHICON} className='hidden sm:block w-5 h-5 hover:cursor-pointer' />
        <DefaultButton>Sign Up</DefaultButton>
        <DefaultButton className='max-w-3'>&nbsp;</DefaultButton>
      </div>
    </div>
  );
};

export default Header;