
export interface IPerson {
    id: number
    lastName: string
    firstName: string
    contact: string
    created?: string
    updated?: string
}

export interface IPersonQuery {
    findAllPerson: IPerson[]
}

export interface IPersonTableLgProps {
    persons: IPerson[]
}