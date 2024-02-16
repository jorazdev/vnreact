import { useState } from "react"

const TailwindView = () => {

    const [items, setItems] = useState<number>(10)

    return(
        <div className="tailwind">
            <h1 className="text-center text-7xl">TailwindView</h1>
            <div className="flex justify-center items-center 
                w-10 h-10 bg-slate-900 rounded-md ml-4 my-5
                 text-gray-200 ">
                9
            </div>
            <div className="min-h-screen flex items-center bg-purple-500">
                <div className="max-w-4xl mx-auto p-10">
                    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6 md:gap-8">
                    { Array.from(Array(10), (e, i) => {
                        return (
                            <li key={i} className="bg-white rounded-lg shadow-xl">
                                <div className="h-24 w-24 flex justify-center items-center cursor-pointer">{ i + 1 }</div>
                            </li>
                        )
                    })}
                    </ul>
                </div>
            </div>
            
            <div className="grid grid-cols-6 grid-row-4 grid-flow-row gap-2
                 bg-slate-400 
                p-3 ml-4 ">
                {Array.from(Array(10), (e, i) => {
                    return (
                        <div className="flex justify-center items-center 
                             bg-slate-900 rounded-md cursor-pointer
                            text-gray-200 " key={i}>
                                <div className="h-24 w-24">{i+1}</div>
                        </div>
                    )
                })}
            </div>
            <div className="max-w-7xl grid grid-cols-3 auto-rows-[80px] bg-slate-300 gap-2 m-4 p-4">
                {Array.from(Array(50), (e, i) => {
                    return (
                        <div key={i} className={`bg-neutral-100 border-2 rounded-xl
                            flex justify-center items-center ${i+1 == 2 || i+1 == 6 ? 'col-span-2' : ''}`}>
                            <h2 className="text-xl text-gray-600">{i+1}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
        
    )
}

export default TailwindView