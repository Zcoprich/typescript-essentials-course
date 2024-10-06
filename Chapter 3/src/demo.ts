const x = "string"
const y = true
console.log(typeof x) // --> result: "string"
console.log(typeof y)// --> result: "boolean"

type ContactName = string;

type ContactStatus = "active" | "inactive" | "new"

type ContactBirthDate = Date | number | string

interface Contact {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
    //email: string;
}

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

function save(source: typeof myType){}

/* Code not covered in Ch 3 Ep. 3
interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

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

type ContactFields = keyof Contact

function getValue<T, U extends keyof T>(source: T, propertyName: U){
    return source[propertyName] //returns value of object's property dynamically via Javascript object index syntax
}

const value = getValue(contact, "status") */