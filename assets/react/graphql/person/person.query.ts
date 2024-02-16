import gql from 'graphql-tag'

export const UPDATE_PERSON_MUTATION = gql`
    mutation updatePerson($personInput: PersonInput!) {
        updatePerson(personInput: $personInput){
            id,
            lastName,
            firstName,
            contact
        }
    }
`

export const ALL_PERSON_QUERY = gql`
    query findAllPerson {
        findAllPerson {
            id,
            lastName,
            firstName,
            contact
        }
    }
`