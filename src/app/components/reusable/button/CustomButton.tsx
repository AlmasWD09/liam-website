import { MouseEventHandler } from 'react';

interface CustomButtonProps {
    text: string;
    svgIcon?: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;

}

function CustomButton({ text, svgIcon, onClick, }: CustomButtonProps) {
    return (
        <div>
            <button
                onClick={onClick}
                className={`
                    flex items-center justify-center gap-2 
                    px-[24px] py-[10px]
                    bg-primary
                    text-white
                    text-base
                    font-bold
                    rounded-lg 
                    hover:bg-primary/80
                    transition-colors duration-200 
                    cursor-pointer
                `}
            >
                {text}
                {svgIcon && (
                    <span className="flex items-center">
                        {svgIcon}
                    </span>
                )}
            </button>
        </div>
    )
}

export default CustomButton