/** JSDOC Syntax
 * 
 * @param {number} contactID 
 * @returns 
 */
async function getContact(contactID){
    const resp = await $.ajax({
        url: '/contacts/${contactID}',
        dataType: "json",
    });

    return {
        id: +resp.id,
        name: resp.name,
        birthDate: new Date(resp.birthDate),
    };
}

getContact(1).then((contact) =>{
    contact.id = 1234
    contact.birthDate = new Date("12/12/1990");
});

getContact(2).then((contact) =>{
    console.log("Contact: ", JSON.stringify(contact))
});