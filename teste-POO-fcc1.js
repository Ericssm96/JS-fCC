const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];


function lookUpProfile(name, prop) {
    let temProp = false;
    let temNome = false;
    let contatoReferencia = {};
    contacts.forEach((contact)=>{
        if(contact.hasOwnProperty(prop)){
            temProp = true;
        }
        if(contact.firstName === name){
            contatoReferencia = contact;
            temNome = true;
        }
    })

    if(temNome && temProp){
        return contatoReferencia[prop];
    } else if (!temNome){
        return "No such contact";
    } else if (!temProp){
        return "No such property";
    }
}

console.log(lookUpProfile("Akira", "address"));






/* function lookUpProfile(name, prop) {
    contacts.forEach((contact)=>{
        if(!contact.hasOwnProperty(prop)){
            console.log("There's no such property here.")
            return;
        } else {
            if (contact.firstName === name) {
                return contact[prop];
            }
        }
    })
} */