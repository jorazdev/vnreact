import { IPersonTableLgProps, IPerson } from "../../../interfaces/person.model"

const PersonTableLg = ({ persons }: IPersonTableLgProps) => {

    return(
        <div className="m-10 bg-gray-100 rounded-lg shadow overflow-auto hidden md:block">
                <h1 className="text-xl m-2">List person</h1>
                <table className="w-full">
                  <thead className="bg-gray-50 border-gray-200 border-b-2 text-black">
                    <tr>
                      <th className="w-20 p-3 text-sm font-semibold text-left">Id</th>
                      <th className="p-3 text-sm font-semibold text-left">Last Name</th>
                      <th className="p-3 text-sm font-semibold text-left">First Name</th>
                      <th className="p-3 text-sm font-semibold text-left">Contact</th>
                      <th className="p-3 text-sm font-semibold text-left">Created</th>
                      <th className="p-3 text-sm font-semibold text-left">Updated</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-4 divide-gray-100">
                    { persons.map((person: IPerson, index: number) => (
                      <tr key={index} className={`cursor-pointer ${index % 2 == 0 || index == 0 ? 'bg-gray-100' : 'bg-white'}`}>
                        <td className="p-3 text-sm text-gray-700">
                          <a href="#" className="font-bold text-blue-500 hover:underline">{person.id}</a>
                        </td>
                        <td className="p-3 text-sm text-gray-700">{person.lastName}</td>
                        <td className="p-3 text-sm text-gray-700">{person.firstName}</td>
                        <td className="p-3 text-sm text-gray-700">{person.contact}</td>
                        <td className="p-3 text-sm text-gray-700">{person.created}</td>
                        <td className="p-3 text-sm text-gray-700">{person.updated}</td>
                      </tr>
                    )) }
                  </tbody>
                </table>
              </div>
    )
}

export default PersonTableLg