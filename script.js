// AddressBook Class
class AddressBook {
    constructor() {
        this.contacts = [];
    };
    add(info) {
        this.contacts.push(info);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
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
const print = (information) => {
    console.log(information);
}

// Creating Address Book and Contacts
const addressBook = new AddressBook();

let contact1 = new Contact("Warren", "warren@gmail.com", 7343218798, "Father");
let contact2 = new Contact("Nancy", "nancy@gmail.com", 1234567890, "Mother");
let contact3 = new Contact("Gillian", "gillian@gmail.com", 9878463748, "Sister");
let contact4 = new Contact("Casey", "casey@gmail.com", 4563782956, "Brother");

addressBook.add(contact1);
addressBook.add(contact2);
addressBook.add(contact3);
addressBook.add(contact4);

print(addressBook);



