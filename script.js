// AddressBook Class
class AddressBook {
    constructor() {
        this.contacts = [];
    };
    add(name, email, phone, relation) {
        this.contacts.push(new Contact(name, email, phone, relation));
    }
    deleteAt(index) {
        index = Number(index);
        this.contacts = [
            ...this.contacts.slice(0, index),
            ...this.contacts.slice(index + 1)
        ];
    }
    filterByName(name) {
        let filterByName = this.contacts.filter(contact => contact.name === name);
        return filterByName;
    }
    filterByRelation(relation){
        let filterByRelation = this.contacts.filter(contact => contact.relation === relation);
        return filterByRelation;
    }
    clear() {
        this.contacts = [];
    }
    edit(oldName, name, email, phone, relation) {
        let index = this.contacts.findIndex(contact => {
            return contact.name === oldName; 
        })
        let updated = new Contact(name, email, phone, relation);
        this.contacts[index] = updated;
        return this.contacts;
    }
}

// Contacts Class
class Contact{
    constructor(name, email, phone, relation){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

// Print Function
const print = (aReferanceToAnAddressBook) => {
    aReferanceToAnAddressBook.contacts.forEach(contact => {
        console.log(contact);
    });
    
}

// Creating Address Book and Contacts
const addressBook = new AddressBook();

// Adding Contacts to Address Boook
addressBook.add("Warren", "warren@gmail.com", 6785756453, "Family");
addressBook.add("Nancy", "nancy@gmail.com", 564375648, "Family");
addressBook.add("Abbie", "abbie@gmail.com", 6783958675, "Friends");
print(addressBook);
// Printing Address Book
const form = document.querySelector(".form-box");
form.addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(form);
    addressBook.add(
        formData.get("name"),
        formData.get("email"),
        formData.get("phone"),
        formData.get("relation")
    );
    console.log(addressBook);
    form.reset()
    display()
})
print(addressBook);

/*function display(){
    document.querySelector("#contactBox").innerHTML = "";
    addressBook.contacts.forEach((contact, index) =>
    {
        const newEntry = document.createElement("div");
        newEntry.classList.add("contact-container");
        let name = document.createElement("p");
        name.innerText = `Name: ${contact.name}`;
        let email = document.createElement("p");
        email.innerText = `Email: ${contact.email}`;
        let phone = document.createElement("p");
        phone.innerText = `Phone: ${contact.phone}`;
        let relation = document.createElement("p");
        relation.innerText = `Relation: ${contact.relation}`;
        newEntry.append(name);
        newEntry.append(email);
        newEntry.append(phone);
        newEntry.append(relation);
        document.querySelector("#contactBox").append(newEntry);
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
        newEntry.append(deleteButton);
    });
}*/
function display(){
    document.querySelector("#contactBox").innerHTML = "";
    addressBook.contacts.forEach((contact, index) =>{
        const newEntry = document.createElement("div");
        newEntry.classList.add("contact-container");
        newEntry.innerHTML = `
        <p>Name: ${contact.name}</p>
        <p>Email: ${contact.email}</p>
        <p>Phone: ${contact.phone}</p>
        <p>Relation: ${contact.relation}</p>
        <i class="far fa-trash-alt" data-index-number="${index}" aria-hidden="true"></i>`;
        document.querySelector("#contactBox").appendChild(newEntry);
    })
}
display()

document.querySelector("#contactBox").addEventListener("click", deleteContact);

function deleteContact(e){
    if(e.target.classList.contains("fa-trash-alt")){
        const index = e.target.getAttribute("data-index-number");
        console.log(index);
        addressBook.deleteAt(index);
    }
    display();
}


