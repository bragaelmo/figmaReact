import React from "react";

const CircleProgressBar = ({percentage, circleWidth, greens}) => {
    const radius = 85;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * percentage) / 100;
    return  (
        <div>
            <svg
              width={circleWidth}
              height={circleWidth}
              viewBox={`0 0 ${circleWidth} ${circleWidth}`}
            >
            <circle 
            cx={circleWidth /2}
             cy={circleWidth / 2} 
             strokeWidth="15px" 
             r={radius}
             fill="black"
             className="circle-background"
             />

            <circle 
            cx={circleWidth /2}
             cy={circleWidth / 2} 
             strokeWidth="15px" 
             r={radius}
             fill="none"
             stroke="#11BCA926"
             className="circle-progress"
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset,
                }}
                transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
             />
            </svg>
            <div className=" inset-y-0"> 
                <h1 className=" absolute float-right flex justify-end pr-24 text-[34px text-white">{percentage}%</h1>
                <h1 className=" absolute float-right flex justify-end pr-20 text-[20px]  text-gray">{greens} GREENS</h1>
            </div>
        </div>
    );




};

export default CircleProgressBar;