'use client';

import { useState } from "react";

type CircleProgressBarProps = {
    percent: number
}
export default function SemiCircleProgressBar(props: CircleProgressBarProps) {
    const [percent, setPercent] = useState(props.percent);
    const [selectedType, setSelectedType] = useState("today")
    const radius = 50;
    const circumference = radius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percent / 100 * circumference);

    return (
        
        <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-base text-textPrimary">Assertividade</h1>
                <div className="flex flex-row items-center">
                    <h1 className={`text-xs whitespace-nowrap cursor-pointer ${selectedType == "today" ? "text-textGreen" : "text-textSecondary"}`}>Hoje</h1><span className="mx-0.5 text-textSecondary"> | </span>
                    <h1 className={`text-xs whitespace-nowrap cursor-pointer ${selectedType == "7days" ? "text-textGreen" : "text-textSecondary"}`}>7 Dias</h1><span className="mx-0.5 text-textSecondary"> | </span>
                    <h1 className={`text-xs whitespace-nowrap cursor-pointer ${selectedType == "30days" ? "text-textGreen" : "text-textSecondary"}`}>30 Dias</h1>
                </div>
            </div>
            <div className="relative w-60 h-60 mx-auto">
                <svg viewBox="0 0 120 120">
                    <defs>
                        <clipPath id="half-clip">
                            <rect x="0" y="60" width="120" height="60" />
                        </clipPath>
                        <linearGradient id="gradientStroke" gradientUnits="userSpaceOnUse" x1="60" y1="60" x2="0" y2="60">
                            <stop offset="23.84%" stopColor="#06C393" />
                            
                            <stop offset="81.07%" stopColor="rgba(0, 117, 255, 0)" />
                        </linearGradient>
                    </defs>
                    {/* Círculo de base */}
                    <g transform="rotate(-180 60 60)">
                        <circle
                            className="text-gray-300"
                            strokeWidth="10"
                            stroke="#11BCA926"
                            fill="transparent"
                            r={radius}
                            cx="60"
                            cy="60"
                            clipPath="url(#half-clip)"
                        />
                    </g>
                    {/* Círculo de progresso */}
                    <g transform="rotate(-180 60 60)">
                        <circle
                            strokeWidth="10"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                            stroke="url(#gradientStroke)"
                            fill="transparent"
                            r={radius}
                            cx="60"
                            cy="60"
                            clipPath="url(#half-clip)"
                        />
                    </g>
                </svg>
                <div className="rounded-full bg-bgGreen w-12 h-12 flex absolute top-1/2 left-1/2 -mt-6 transform -translate-x-1/2 -translate-y-1/2">
                    <i className={`fa-solid fa-face-laugh text-white center mx-auto my-auto`}/>
                </div>
            </div>
            <div className="w-full mx-auto p-8 bg-bgCards rounded-2xl flex justify-between flex-row -mt-28">
                <h4 className="text-thin text-sm text-textSecondary">0%</h4>
                <div className="flex flex-col text-center">
                    <h1 className="text-2xl font-bold text-white">{percent}%</h1>
                    <h3 className="text-thin text-sm text-textSecondary">de acertos!</h3>
                </div>
                <h4 className="text-thin text-sm text-textSecondary">100%</h4>
            </div>
        </div>

    )
}