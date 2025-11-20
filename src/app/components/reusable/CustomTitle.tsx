interface CustomTitleProps {
  text: string;
  svgIcon?: React.ReactNode;

}

function CustomTitle({ text, svgIcon }: CustomTitleProps) {
  return (
    <div className={`
                    flex flex-col items-center justify-center 
                    text-base
                    text-[#000000]
                    font-bold
                    text-[28px]
                `}>
      {text}
      {svgIcon && (
        <span className="flex items-center">
          {svgIcon}
        </span>
      )}
    </div>
  )
}

export default CustomTitle