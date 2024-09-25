interface Contact{
    id: number;
    name: string;
}

function clone<T1, T2>(source: T1): T2{
    return Object.apply({}, source);
}

const a: Contact = {id: 123, name: "Homer Simpsons"};
const b = clone<Contact, Contact>(a);

const dateRange = {startDate: Date.now(), endDate: Date.now()};
const dateRangeCopy = clone(dateRange);