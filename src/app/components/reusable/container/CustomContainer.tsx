interface CustomContainerProps {
    children: React.ReactNode
}

const CustomContainer = ({ children }: CustomContainerProps) => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    )
}

export default CustomContainer