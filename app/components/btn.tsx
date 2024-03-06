"use client";

interface BtnProps {
    direction?: string;
    position: number;
    maxWidth: number;
    onClick?: () => void;
}

const Btn = ({direction,position,maxWidth,onClick}: BtnProps) => {
    return (
        <button onClick={onClick} className={`${((position === 0 && direction === 'left') || (position === -maxWidth && direction === 'right')) ? 'invisible' : 'visible'} ${(position === -420 && direction === 'right') ? 'invisible' : 'visible'} flex h-full w-12 items-center justify-center bg-opacity-50 ${(direction === 'left') ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-white from-50% px-3 transition duration-500 hover:cursor-pointer z-10`}>
            <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-slate-400">
                {
                    (direction === "left") && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 text-slate-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    )
                }
                {
                    (direction === "right") && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 text-slate-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    )
                }
            </div>
        </button>
    );
};

export default Btn;