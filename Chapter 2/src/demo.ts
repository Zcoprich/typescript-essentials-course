interface Contact{
    id: number;
    name: string;
    birthDate?: Date;
    status: ContactStatus;
    clone(name:string): Contact;
}

enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}

function clone(source: Contact): Contact{
    return Object.apply({}, source);
}