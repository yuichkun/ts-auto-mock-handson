import { createMock } from 'ts-auto-mock';
interface Person {
    id: string;
    getName(): string;
    details: {
        phone: number
    }
}
const mock = createMock<Person>();

console.log(mock.id)
console.log(mock.getName())
console.log(mock.details)
