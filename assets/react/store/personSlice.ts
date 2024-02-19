import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { IPerson } from '../interfaces/person.model'

interface IPersonState {
    persons: IPerson[]
  }

// Define the initial state using that type
const initialState: IPersonState = {
    persons: []
  }

export const personSlice = createSlice({
    name: 'person',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setPersons: (state, action: PayloadAction<IPerson[]>) => {
          state.persons = action.payload
        },
        addPerson: (state, action: PayloadAction<IPerson>) => {
            state.persons = [...state.persons, action.payload]
        }
    },
    })

    export const { setPersons, addPerson } = personSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPerson = (state: RootState) => state.person.persons

export default personSlice.reducer