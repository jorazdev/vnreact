
import { useMutation, useQuery } from '@apollo/client';
import { ALL_PERSON_QUERY, UPDATE_PERSON_MUTATION } from './person.query'
import { PersonInput } from 'src/person/dto/person.input'
import { useState } from 'react';
//import { usePersonStore } from '../../pinia/person.store'


export default function usePersonGql() {

    const [persons, setPersons ] = useState([])

    //const personStore = usePersonStore()
    const [updatePersonMutate, { data, loading, error }] = useMutation(UPDATE_PERSON_MUTATION);

    const updatePersonMutation = async (personInput: PersonInput) => {
        const res = await updatePersonMutate({ variables: {
            personInput: {
                ...personInput
            }
        } })

        
        ///personStore.onUpdatePerson(personInput.id, res.data?.updatePerson)
    }

    const findAllPersonQuery = async () => {
        const { loading, error, data } = useQuery(ALL_PERSON_QUERY);

        if(data != undefined){
            setPersons(data.findAllPerson)
        }
    
        //const { onResult } = useQuery(ALL_PERSON_QUERY)

        // onResult(queryResult => {
        //     const res = !queryResult.loading ? queryResult.data.findAllPerson : null
        //     if(res){
        //         personStore.persons = res
        //     }
        // })
    }

   

    return {
        persons,
        updatePersonMutate,
        findAllPersonQuery
    }
        
    
        
}