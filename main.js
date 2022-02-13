const Contact = require("./contact");
const Group = require("./group");
const AddressBook = require("./address-book");

const contact1 = new Contact("Michal", "Wakulinski", "email@com");
const group = new Group("Byki");
group.addContact(contact1);

const addressbook = new AddressBook();
addressbook.addNewGroup("Praca");
console.log(addressbook);
addressbook.addNewGroup("Koledzy");
console.log(addressbook);
addressbook.addNewContact("Anna", "Wanna", "Ann@Wan.pl");
addressbook.addNewContact("Kazimierz", "Borski", "Kaz@Bar.pl");
addressbook.addNewContact("Michal", "Waki", "mich@wak.pl");
addressbook.addNewContact("Karyna", "Wanna", "Karyna@Wan.pl");
addressbook.deleteContact(addressbook.findContact("Anna Wanna"));
addressbook.addContactToGroup("Praca", addressbook.findContact("Michal Waki"));
addressbook.addNewContact("Anna", "Wanna", "Ann@Wan.pl");
addressbook.addContactToGroup("Koledzy", addressbook.findContact("Anna Wanna"));

console.log(addressbook);
console.log(addressbook.groups[0]);
