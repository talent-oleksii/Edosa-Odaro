import { FC, useEffect } from 'react';
import PLAY from '../../assets/images/play.png';
const MainComponent: FC = () => {

    return (
        <div className='bg-main-person bg-home-pattern bg-cover bg-center rounded-[20px]'>
            <div className='ml-[20px] mr-[20px] relative'>

                <div className="inset-0 flex  ml-[94px] pt-[168px]">
                    <h2 className="text-[60px] font-bold text-[#475467] leading-[72px]">
                        Welcome to Your AI and <br />Data-Driven Journey
                    </h2>
                </div>
                <div className="inset-0 flex mt-[45px] ml-[94px]">
                    <h2 className="text-[36px] text-[#475467] leading-[44px]">
                        <span className='text-[#FF6E3E] font-bold'>Unlock Your Business's Potential<br /> with Edosa Odaro, </span>
                        the Visionary<br /> and multi-award-winning data<br /> Value-Driven Data Leader
                    </h2>
                </div>
                <div className='relative flex items-center ml-[90px] mt-[45px] pb-[108px]'>
                    <img src={PLAY} />
                    <span className="text-[20px] text-[#475467] pl-[30px] leading-6">
                        Listen to what <br /> Edosa has to say
                    </span>
                </div>
            </div>
        </div >
    );
};

export default MainComponent;