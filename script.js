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

addressBook.add("Warren", "warren@gmail.com", 7343218798, "Father");
addressBook.add("Nancy", "nancy@gmail.com", 1234567890, "Mother");
addressBook.add("Gillian", "gillian@gmail.com", 9878463748, "Sister");
addressBook.add("Casey", "casey@gmail.com", 4563782956, "Brother");
addressBook.add("Liam", "liam@gmail.com", 7345674653, "Myself");
addressBook.deleteAt(4);

print(addressBook);



