import { createMock, createMockList } from 'ts-auto-mock';

type Organization = {
    people: Person[];
}
interface Person {
    id: string;
    getName(): string;
    details: {
        phone: number
    }
}

const organization = createMock<Organization>(
    {
        people: createMockList<Person>(4)
    }
)
console.log('organization', organization);
organization.people.forEach(printPerson);

function printPerson(person: Person) {
    console.log('id', person.id);
    console.log('name', person.getName());
    console.log('details', person.details.phone);
}