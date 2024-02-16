import { useEffect } from "react"
import usePersonGql from "../../graphql/person/personGql"
import { useMutation, useQuery } from '@apollo/client';
import { ALL_PERSON_QUERY, UPDATE_PERSON_MUTATION } from '../../graphql/person/person.query'
import { IPersonQuery } from "../../interfaces/person.model";
import PersonTable from "./PersonTable";

const PersonView = () => {
   
    const { loading, error, data } = useQuery<IPersonQuery>(ALL_PERSON_QUERY);

    if(loading) return <p>Loagin</p>
    if(error) return <p>Error! {error.message}</p>
    if(data){
        console.log(data.findAllPerson)
    }
    

    return (
        <>
            <h1>Person View</h1>
            <PersonTable/>
            {data.findAllPerson.map((person: any, index: number) => (
                <div key={index}>
                    <h4>{person.id}</h4>
                    <h4>{person.lastName}</h4>
                    <h4>{person.firsName}</h4>
                    <h4>{person.contact}</h4>
                </div>
            ))}
        </>
    )
}

export default PersonView