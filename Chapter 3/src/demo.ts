/* Content removed in Ch 3.4
const x = "string"
const y = true
console.log(typeof x) // --> result: "string"
console.log(typeof y)// --> result: "boolean" 

type ContactName = string; */

type ContactStatus = "active" | "inactive" | "new"

type ContactBirthDate = Date | number | string

//modified in ch 3.4, removing birthDate and adding address
interface Contact {
    id: number;
    name: string; //changed from ContactName to string in Ch 3.4
    status?: ContactStatus;
    address: Address;
}

interface ContactEvent {
    contactId: Contact["id"];
}

interface ContactDeletedEvent extends ContactEvent {}

interface ContactStatusChangedEvent extends ContactEvent {
    oldStatus: Contact["status"];
    newStatus: Contact["status"];
}

interface ContactEvents{
    deleted: ContactDeletedEvent;
    statusChanged: ContactStatusChangedEvent;
    // other events to be addressed
}

/* Code removed in Ch 3.4
function toContact(nameOrContact: string | Contact): Contact{
    if (typeof nameOrContact === "object"){
        return{
            id: nameOrContact.id,
            name: nameOrContact.name,
            status: nameOrContact.status
        }
    }
    else{
        return{
            id: 0,
            name: nameOrContact,
            status: "active"
        }
    }
}

const myType = {min: 1, max :200}

function save(source: typeof myType){} */

// Modified in Ch 3.4
interface Address {
    street: string;
    province: string;
    postalCode: string;
}

/* Code not covered in Ch 3.3
type AddressableContact = Contact & Address

function getBirthDate(contact: Contact) {
    if (typeof contact.birthDate === "number") {
        return new Date(contact.birthDate);
    }
    else if (typeof contact.birthDate === "string") {
        return Date.parse(contact.birthDate)
    }
    else {
        return contact.birthDate
    }
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "new"
}

type ContactFields = keyof Contact */

// Available again in Ch 3.4
function getValue<T, U extends keyof T>(source: T, propertyName: U){
    return source[propertyName] //returns value of object's property dynamically via Javascript object index syntax
}

function handleEvent <T extends keyof ContactEvents>(
    eventName: T, // name of property found in ContactEvents
    handler: (evt: ContactEvents[T]) => void)
    {
        if(eventName === "statusChanged"){
            handler({contactId: 1, oldStatus: "active", newStatus: "inactive"})
        }
    }

handleEvent("statusChanged", evt => evt)

/* Not addressed in Ch 3.3
const value = getValue(contact, "status") */