
interface IModalProps {
    show: boolean
    title: string
    children: React.ReactNode
    onShow: () => void
}
const Modal = ({ show, title, onShow, children }: IModalProps) => {

    const onClose = (e: any) => {
        if(e.target.id == 'modal') onShow()
    }

    return (
        <div className={`fixed inset-0 z-50 bg-opacity-40 
                         w-screen bg-black backdrop-blur-sm
                         transition-all duration-1000 ease-in-out delay-150
                        ${show ? 'flex justify-center items-center ' : 'hidden'}`} 
                        onClick={onClose} id="modal">
            <div className="relative bg-white w-1/2 h-auto rounded-md shadow ">
                <h1 className="text-lg font-semibold py-3 px-2 absolute inset-x-0  
                    bg-gray-100 rounded-tl-md rounded-tr-md shadow">
                        {title}
                </h1>
                <div className="mt-12 p-5 flex justify-start items-center">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal