const { v4: uuidv4 } = require("uuid");
const Validator = require("./validator");
const Contact = require("./contact");

// Ma mieć: listę kontaktów oraz nazwę grupy oraz uuid
// Ma umożliwiać: zmianę nazwy grupy, można dodać lub usunac kontakt z grupy, można sprawdzić czy kontakt istnieje w grupie

class Group {
  #id;
  constructor(name) {
    this.name = name;
    this.contacts = [];
    this.#id = uuidv4();
  }

  set name(input) {
    Validator.throwIfNotString(input);
    this._name = input;
  }

  get name() {
    return this._name;
  }

  addContact(contact) {
    Validator.throwIfNotProperInstance(contact, Contact);
    if (!this.findContact(`${contact.name} ${contact.surname}`)) {
      this.contacts.push(contact);
    }
  }

  deleteContact(contact) {
    Validator.throwIfNotProperInstance(contact, Contact);
    if (this.findContact(`${contact.name} ${contact.surname}`)) {
      this.contacts.splice(this.contacts.indexOf(contact), 1);
    }
  }

  findContact(phrase) {
    return this.contacts.find((contact) => contact.checkIfHaveProperty(phrase));
  }
}

// const contact1 = new Contact("MIchal", "Wakulinski", "michal.wak@op.pl");
// const contact2 = new Contact("Barbara", "Wakulinski", "michal.wak@op.pl");
// const group = new Group("Barany");
// group.addContact(contact1);
// group.addContact(contact2);
// group.deleteContact(contact1);
// group.deleteContact(contact1);
// console.log(group);

module.exports = Group;
