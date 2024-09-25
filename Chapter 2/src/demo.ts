interface Contact{
    id: number;
    name: string;
    birthDate?: Date;
    status: ContactStatus;
}

enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: ContactStatus.Active
}