import React, { useEffect, useRef } from 'react';
import GrayDot from "../../Assets/Icon/grayDot.svg";

function Marquee() {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        let scrollWidth = marquee.scrollWidth / 2; // Divide by 2 because we're duplicating the content
        let currentPosition = 0;
        let requestId;

        const scrollMarquee = () => {
            currentPosition -= 1; // Adjust the speed by changing this value
            if (-currentPosition >= scrollWidth) {
                currentPosition = 0;
            }
            marquee.style.transform = `translateX(${currentPosition}px)`;
            requestId = requestAnimationFrame(scrollMarquee);
        };

        scrollMarquee();

        return () => cancelAnimationFrame(requestId);
    }, []);

    return (
        <div className="overflow-hidden sm:mt-[104px] mt-[72px]">
            <div
                className="marquee-content sm:text-[88px] text-[40px] leading-[82px] sm:leading-[82px] flex sm:font-medium whitespace-nowrap sm:gap-9 gap-4 sm:h-[97px] items-center"
                ref={marqueeRef}
            >
                <h1 className="text-[#009EE3]">Support</h1>
                <img className="sm:w-4 w-3 h-3 sm:h-4" src={GrayDot} alt="" />
                <h1 className="text-[#5D8424] ">Agriculture</h1>
                {/* <h1
                    className="text-transparent "
                    style={{
                        WebkitTextStroke: '1px #5D8424',
                    }}
                >
                    Agriculture
                </h1> */}
                <img className="sm:w-4 w-3 h-3 sm:h-4" src={GrayDot} alt="" />
                <h1 className="text-[#E78AB1]">Organic</h1>
                <img className="sm:w-4 w-3 h-3 sm:h-4" src={GrayDot} alt="" />
                <h1 className="text-[#5D8424]">Quality</h1>
                <img className="sm:w-4 w-3 h-3 sm:h-4" src={GrayDot} alt="" />

                {/* Duplicate the content for seamless looping */}
                <h1 className="text-[#009EE3]">Support</h1>
                <img className="sm:w-4 w-3 h-3 sm:h-4" src={GrayDot} alt="" />
                <h1 className="text-[#5D8424] ">Agriculture</h1>
                {/* <h1
                    className="text-transparent "
                    style={{
                        WebkitTextStroke: '1px #5D8424',
                    }}
                >
                    Agriculture
                </h1> */}
                <img className="sm:w-4 w-3 h-3 sm:h-4" src={GrayDot} alt="" />
                <h1 className="text-[#E78AB1]">Organic</h1>
                <img className="sm:w-4 w-3 h-3 sm:h-4" src={GrayDot} alt="" />
                <h1 className="text-[#5D8424]">Quality</h1>
                <img className="sm:w-4 w-3 h-3 sm:h-4" src={GrayDot} alt="" />
                <h1 className="text-[#009EE3]">Support</h1>
                <img className="sm:w-4 w-3 h-3 sm:h-4" src={GrayDot} alt="" />
                <h1 className="text-[#5D8424] ">Agriculture</h1>
                {/* <h1
                    className="text-transparent "
                    style={{
                        WebkitTextStroke: '1px #5D8424',
                    }}
                >
                    Agriculture
                </h1> */}
                <img className="sm:w-4 w-3 h-3 sm:h-4" src={GrayDot} alt="" />
                <h1 className="text-[#E78AB1]">Organic</h1>
                <img className="sm:w-4 w-3 h-3 sm:h-4" src={GrayDot} alt="" />
                <h1 className="text-[#5D8424]">Quality</h1>
                <img className="sm:w-4 w-3 h-3 sm:h-4" src={GrayDot} alt="" />
            </div>
        </div>
    );
}

export default Marquee;

