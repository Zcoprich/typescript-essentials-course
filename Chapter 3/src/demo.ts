// Removed content not mentioned in Ch 3.5 to avoid clutter

let x: Record<string, string | number | boolean | Function> = {name: "Wruce Bayne"}
x.number = 1234;
x.status = true
x.log = () => console.log("awesome!")

type ContactStatus = "active" | "inactive" | "new"

//modified in ch 3.4, removing birthDate and adding address
interface Contact {
    id: number;
    name: string; 
    status?: ContactStatus;
    address: Address;
}

// Modified in Ch 3.4
interface Address {
    street: string;
    province: string;
    postalCode: string;
}

interface Query{
    sort?: 'asc' | 'desc';
    matches(val): boolean;
}

type ContactQuery = Partial<
    Pick<
        Record<keyof Contact, Query>,
        "id" | "name"
        >
    >

type RequiredContactQuery = Required<ContactQuery>

function searchContacts(contacts: Contact[], query: ContactQuery) {
    return contacts.filter(contact => {
        for (const property of Object.keys(contact) as (keyof Contact)[]) {
            // get the query object for this property
            const propertyQuery = query[property];
            // check to see if it matches
            if (propertyQuery && propertyQuery.matches(contact[property])) {
                return true;
            }
        }

        return false;
    })
}

const filteredContacts = searchContacts(
    [/*Contacts */],    
    {
       id:{matches: (id) => id === 123},
       name:{matches: (name) => name === "Carol Weaver"},
    }
);
