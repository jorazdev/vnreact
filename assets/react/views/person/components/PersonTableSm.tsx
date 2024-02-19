import { IPerson, IPersonTableLgProps } from "../../../interfaces/person.model"


const PersonTableSm = ({ persons }: IPersonTableLgProps) => {
  
    return (
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2">
            {persons.map((person: IPerson, index: number) => (
                <div className="bg-gray-100 rounded-lg shadow my-2 mx-2 p-2" key={index}>
                    { Object.keys(person).map((key: string, i: number) => (
                        <div key={key} className=" flex justify-start items-center gap-2 px-9 ">
                            <div className="py-1 px-4 rounded-md my-1 bg-yellow-600 text-yellow-300 text-sm">{key}</div>
                            <div className="text-sm"><span>{person[key]}</span></div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default PersonTableSm