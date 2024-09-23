import { FC, useEffect } from 'react';
import MAIN from '../../images/main.png';
import PLAY from '../../images/play.png';
const MainComponent: FC = () => {

    return (
        <div className='ml-[20px] mr-[20px] relative'>
            <div className='-z-[1] relative'>
                <img src={MAIN} className='absolute h-[763px] w-full object-cover rounded-[20px]' />
            </div>
            <div className="inset-0 flex pt-[150px] pl-[94px] z-[1]">
                <h2 className="text-[60px] font-bold text-[#475467]">
                    Welcome to Your AI and <br />Data-Driven Journey
                </h2>
            </div>
            <div className="inset-0 flex pt-[45px] pl-[94px]">
                <h2 className="text-[36px] text-[#475467]">
                    <span className='text-[#FF6E3E] font-bold'>Unlock Your Business's Potential<br /> with Edosa Odaro, </span>
                    the Visionary<br /> and multi-award-winning data<br /> Value-Driven Data Leader
                </h2>
            </div>
            <div className='relative flex items-center pl-[90px] pt-[45px]'>
                <img src={PLAY} />
                <span className="text-[20px] text-[#475467] pl-[30px]">
                    Listen to what <br /> Edosa has to say
                </span>
            </div>
        </div>
    );
};

export default MainComponent;