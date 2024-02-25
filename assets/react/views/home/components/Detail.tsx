import { IDetail, IItem } from "../../../interfaces/detail.model"

interface IDetailProps {
    detail: IDetail
}

const Detail = ({detail}: IDetailProps) => {
    
    return(
        <div className="border-2 border-gray-300 w-full md:w-1/4">
            <div className="flex justify-center items-center bg-gray-100 ">
                <a href="https://nestjs.com/" target="_blank">
                    <img src={detail.logo} className="w-5" alt="Nest logo" />
                </a> 
                <h1 className="text-xl px-2 py-1 rounded-sm text-center mb-1">{ detail.title }</h1>
            </div>
            
            <div className="flex flex-col justify-start">
                { detail.items?.map((item: IItem, index: number) => (
                    <div className="flex justify-start items-center p-1" 
                        key={index}>
                        <div className="text-center text-sm p-1 font-bold">{ item.title } : </div>
                        <div className="text-center text-sm">{ item.value }</div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Detail