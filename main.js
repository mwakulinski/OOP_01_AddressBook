const AddressBook = require("./address-book");

const addressbook = new AddressBook();
addressbook.addNewGroup("Praca");
addressbook.addNewGroup("Koledzy");
addressbook.addNewContact("Anna", "Wanna", "Ann@Wan.pl");
addressbook.addNewContact("Kazimierz", "Borski", "Kaz@Bar.pl");
addressbook.addNewContact("Michal", "Waki", "mich@wak.pl");
addressbook.addNewContact("Karyna", "Wanna", "Karyna@Wan.pl");
addressbook.addContactToGroup("Praca", addressbook.findContact("Anna Wanna"));
addressbook.addContactToGroup("Praca", addressbook.findContact("Michal Waki"));
console.log(addressbook.findGroup("Praca"));
addressbook.deleteContact(addressbook.findContact("Anna Wanna").id);

console.log(addressbook.groups[0]);
