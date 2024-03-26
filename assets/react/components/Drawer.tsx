interface IDrawerProps {
    isOpen: boolean
    title: string
    width?: number
    position?: string
    children: React.ReactNode
    onClose: () => void
}

const Drawer = ({isOpen, title, width, position, children, onClose}: IDrawerProps) => {

    return(
        <div className={`fixed ${position  == 'left' || position  == '' ? 'top-0 left-0' : 'top-0 right-0'} 
                w-[${width}px] h-full bg-white shadow
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                transition duration-300 ease-in-out delay-150`}>
                <div className="flex justify-between items-center px-3 py-1 bg-gray-100">
                    <h2 className="text-2xl text-black">{title}</h2>
                    <div className="text-xl text-black cursor-pointer" 
                        onClick={onClose}>x</div>
                </div>
                <div className="p-3 mt-5">
                    { children }
                </div>
        </div>
    )
}

export default Drawer