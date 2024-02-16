
export interface IPerson {
    id: number
    lastName: string
    firstName: string
    contact: string
}

export interface IPersonQuery {
    findAllPerson: IPerson[]
}