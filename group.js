const { v4: uuidv4 } = require("uuid");
const Validator = require("./validator");
const Contact = require("./contact");

class Group {
  constructor(name) {
    this.name = name;
    this.contacts = [];
    this.id = uuidv4();
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

    if (!this.findContact(contact.id)) {
      this.contacts.push(contact);
    } else {
      throw new Error(`Such a contact already exist`);
    }
  }

  deleteContact(contactId) {
    Validator.throwIfNotString(contactId);
    this.contacts = this.contacts.filter((contact) => contact.id !== contactId);
  }

  findContact(phrase) {
    return this.contacts.find((contact) =>
      contact.checkIfContainPhrase(phrase)
    );
  }
}

module.exports = Group;
