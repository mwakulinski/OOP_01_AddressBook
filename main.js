const { Contact, Group, AddressBook } = require("./contact");

const contact1 = new Contact("Michal", "Wakulinski", "email.com");
const group = new Group();
group.addContact(contact1);

const addressbook = new AddressBook();
addressbook.addNewGroup("Praca");
addressbook.addNewContact("Anna", "Wanna", "Ann@Wan.pl");
addressbook.addNewContact("Kazimierz", "Borski", "Kaz@Bar.pl");
addressbook.addNewContact("Michal", "Waki", "mich@wak.pl");
addressbook.addNewContact("Karyna", "Wanna", "Karyna@Wan.pl");
addressbook.group[0].addContact(addressbook.contact[0]);
console.log(addressbook);
addressbook.deleteGroup(addressbook.group[0]);
console.log(addressbook);
addressbook.findContact("Michal Wak").name = "Bartek";
console.log(addressbook.findContact(89213));
