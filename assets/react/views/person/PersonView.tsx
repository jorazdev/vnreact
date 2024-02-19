
import { useMutation, useQuery } from '@apollo/client';
import { ALL_PERSON_QUERY } from '../../graphql/person/person.query'
import { IPerson, IPersonQuery } from "../../interfaces/person.model";
import PersonTable from "./components/PersonTable";
import { setPersons } from "../../store/personSlice"
import { useAppDispatch } from "../../store/hooks"

const PersonView = () => {
    const dispatch = useAppDispatch()
    const { loading, error, data } = useQuery<IPersonQuery>(ALL_PERSON_QUERY);

    if(loading) return <p>Loagin</p>
    if(error) return <p>Error! {error.message}</p>
    if(data){
      const pers: IPerson[] = data.findAllPerson
       dispatch(setPersons(pers))
    }

    return (
        <div className="h-screen w-screen overflow-hidden bg-slate-400">
            <h1 className="text-center">Person View</h1>
            <PersonTable/>
        </div>
    )
}

export default PersonView