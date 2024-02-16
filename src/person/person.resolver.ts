import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PersonService } from './person.service';
import { Person } from '../entity/person';
import { PersonInput } from './dto/person.input';


@Resolver(() => Person)
export class PersonResolver {
  constructor(private readonly personService: PersonService) {}

  @Query(() => [Person])
  async findAllPerson() {
    return await this.personService.findAll();
  }

  
  @Mutation(() => Person)
  updatePerson(@Args('personInput') personInput: PersonInput) {
    return this.personService.update(personInput);
  }

}
