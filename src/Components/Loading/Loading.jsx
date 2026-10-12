import React from 'react';
import { FaSwift } from 'react-icons/fa';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] w-full px-4 bg-transparent overflow-hidden">
            <style>
                {`
                    /* আরও বড় পরিসরে এবং স্মুথ গতিতে ডানে-বামে যাতায়াত */
                    @keyframes swift-travel {
                        0% {
                            transform: translateX(-220px) translateY(8px) scaleX(1);
                        }
                        49.9% {
                            transform: translateX(220px) translateY(-10px) scaleX(1);
                        }
                        50% {
                            transform: translateX(220px) translateY(-10px) scaleX(-1);
                        }
                        99.9% {
                            transform: translateX(-220px) translateY(8px) scaleX(-1);
                        }
                        100% {
                            transform: translateX(-220px) translateY(8px) scaleX(1);
                        }
                    }

                    @keyframes swift-bob {
                        0%, 100% { transform: translateY(0px) rotate(-2deg); }
                        50%      { transform: translateY(-8px) rotate(3deg); }
                    }

                    @keyframes swift-wings {
                        0%, 100% { transform: scaleY(1); }
                        50%      { transform: scaleY(0.3); }
                    }

                    @keyframes speed-streak {
                        0%   { transform: translateX(0); opacity: 0; }
                        30%  { opacity: 0.7; }
                        100% { transform: translateX(-55px); opacity: 0; }
                    }

                    @keyframes pulse-glow {
                        0%, 100% { opacity: 0.15; transform: scale(0.9); }
                        50%      { opacity: 0.35; transform: scale(1.1); }
                    }

                    .anim-travel { animation: swift-travel 4.5s ease-in-out infinite; }
                    .anim-bob    { animation: swift-bob 1.2s ease-in-out infinite; }
                    .anim-wings  { transform-origin: center; animation: swift-wings 0.35s ease-in-out infinite; }
                    .anim-streak { animation: speed-streak 0.8s linear infinite; }
                    .anim-glow   { animation: pulse-glow 2.5s ease-in-out infinite; }
                `}
            </style>

            {/* কোনো ব্যাকগ্রাউন্ড বক্স নেই, একদম খোলামেলা বড় এরিয়া */}
            <div className="relative w-full max-w-xl h-72 flex flex-col items-center justify-center">
                
                {/* পেছনের সফট গ্লো */}
                <div className="anim-glow absolute w-56 h-56 bg-primary/15 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative w-full flex items-center justify-center h-44">
                    <div className="anim-travel absolute flex items-center justify-center">
                        <div className="anim-bob relative flex items-center justify-center">
                            
                            {/* স্পিড লাইন */}
                            <div className="absolute -left-16 flex flex-col gap-2.5 pointer-events-none">
                                <div className="anim-streak h-0.5 w-14 bg-gradient-to-l from-primary to-transparent rounded-full"></div>
                                <div className="anim-streak h-0.5 w-8 bg-gradient-to-l from-primary to-transparent rounded-full" style={{ animationDelay: '0.2s' }}></div>
                            </div>

                            {/* বড় এবং আকর্ষণীয় বার্ড ও পার্সেল SVG */}
                            <svg 
                                viewBox="0 0 120 90" 
                                className="w-40 h-40 sm:w-48 sm:h-48 overflow-visible"
                                style={{ filter: 'drop-shadow(0 16px 20px rgba(17,45,49,0.22))' }}
                                aria-hidden="true"
                            >
                                <defs>
                                    <linearGradient id="birdGrad" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#112d31" />
                                        <stop offset="100%" stopColor="#1e4e54" />
                                    </linearGradient>
                                    <linearGradient id="parcelGrad" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#f59e0b" />
                                        <stop offset="100%" stopColor="#d97706" />
                                    </linearGradient>
                                </defs>

                                {/* লেজ */}
                                <path d="M45 42 L15 32 L28 46 Z" fill="url(#birdGrad)" opacity="0.9" />

                                {/* শরীর */}
                                <path d="M35 40 C35 30 75 25 88 42 C95 52 80 62 55 58 Z" fill="url(#birdGrad)" />

                                {/* ডানা */}
                                <g className="anim-wings">
                                    <path d="M55 42 C50 15 75 5 88 18 C90 25 75 38 55 42 Z" fill="currentColor" className="text-primary" />
                                    <path d="M55 42 C50 18 70 10 82 20 C84 25 70 35 55 42 Z" fill="#ffffff" opacity="0.4" />
                                </g>

                                {/* মাথা ও থোঁত */}
                                <circle cx="85" cy="38" r="8" fill="url(#birdGrad)" />
                                <path d="M92 36 L102 39 L92 42 Z" fill="#f59e0b" />

                                {/* পার্সেল */}
                                <g transform="translate(52, 52)">
                                    <line x1="12" y1="0" x2="12" y2="10" stroke="#112d31" strokeWidth="2" strokeLinecap="round" />
                                    <rect x="4" y="10" width="16" height="14" rx="2.5" fill="url(#parcelGrad)" />
                                    <rect x="10" y="10" width="4" height="14" fill="#fef3c7" opacity="0.8" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* নিচের প্রোগ্রেস লাইন */}
                <div className="absolute bottom-2 w-56 sm:w-72 flex items-center justify-between px-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></div>
                    <div className="flex-1 mx-3 h-[2px] bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary animate-[pulse_1.5s_infinite]"></div>
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                </div>
            </div>

            {/* লোগো টেক্সট */}
            <div className="mt-4 flex items-center gap-2.5">
                <FaSwift className="text-primary text-4xl sm:text-5xl" />
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#112d31] dark:text-white">
                    Swift <span className="text-primary">Drop</span>
                </h3>
            </div>
            
            {/* লোডিং সাবটাইটেল */}
            <p className="text-sm sm:text-base text-slate-400 mt-2 font-medium tracking-wide animate-pulse">
                Loading, please wait...
            </p>
        </div>
    );
};

export default Loading;