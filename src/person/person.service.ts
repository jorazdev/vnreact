import { Injectable } from '@nestjs/common';

import { PersonInput } from './dto/person.input'
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from 'src/entity/person';
import { Repository } from 'typeorm';
import { PersonOuput } from './dto/person.output';

@Injectable()
export class PersonService {
 
  constructor(@InjectRepository(Person) private personRepository: Repository<Person>) {}

  async findAll(): Promise<Person[]> {
    const persons: Person[] = await this.personRepository.find({
      order: {
        id: 'ASC'
      }
    })
    return persons
  }

  async update(personInput: PersonInput): Promise<PersonOuput> {

    let person: Person

    if(personInput.id == 0){
      person = this.personRepository.create(personInput)
    }else {
      person = await this.personRepository.findOne({
        where:{ 
          id: personInput.id
        }
      })
    }

    Object.assign(person, personInput)
    
    return await this.personRepository.save(person)
  }

}
