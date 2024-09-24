import { FC, useEffect } from 'react';
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import ITEM1 from '../../assets/svg/item1.svg';
import ITEM2 from '../../assets/svg/item2.svg';
import ITEM3 from '../../assets/svg/item3.svg';
import ITEM4 from '../../assets/svg/item4.svg';
import ITEM5 from '../../assets/svg/item5.svg';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024, },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const FlowingBar: FC = () => {
    const items = [ITEM1, ITEM2, ITEM3, ITEM4, ITEM5];
    return (
        <Carousel responsive={responsive} autoPlay arrows={false} className='mt-7' itemClass="px-5">
            {items.map((item, index) => (
                <div key={index} className={`card rounded-md shadow-md gap-3 bg-def-color flex h-[205px] items-center justify-center`}>
                    <img src={item} />
                </div>
            ))}
        </Carousel>
    );
};

export default FlowingBar;