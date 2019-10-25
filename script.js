// AddressBook Class
class AddressBook {
    constructor() {
        this.contacts = [];
    };
    add(name, email, phone, relation) {
        this.contacts.push(new Contact(name, email, phone, relation));
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
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
addressBook.add("Warren", "warren@gmail.com", 7343218798, "Father");
addressBook.add("Nancy", "nancy@gmail.com", 1234567890, "Mother");
addressBook.add("Gillian", "gillian@gmail.com", 9878463748, "Sister");
addressBook.add("Casey", "casey@gmail.com", 4563782956, "Brother");
addressBook.add("Liam", "liam@gmail.com", 7345674653, "Myself");
addressBook.deleteAt(4);

// Printing Address Book
print(addressBook);


// const filterByName = addressBook.contacts.filter(contact => contact.name === "Nancy");
// console.log(filterByName);

console.log(addressBook.filterByName("Nancy"));
console.log(addressBook.filterByRelation("Father"));
console.log(addressBook.filterByRelation("Sister"));

