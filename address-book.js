const Validator = require("./validator");
const Group = require("./group");
const Contact = require("./contact");

class AddressBook {
  constructor() {
    this.contacts = [];
    this.groups = [];
  }

  addNewContact(name, surname, email) {
    Validator.throwIfNotString(name, surname, email);
    if (!this.findContact(`${name} ${surname}`)) {
      this.contacts.push(new Contact(name, surname, email));
    }
  }

  deleteContact(contactId) {
    Validator.throwIfNotString(contactId);
    const contactToDelete = this.findContact(contactId);
    if (contactToDelete) {
      this.contacts = this.contacts.filter(
        (contact) => contact !== contactToDelete
      );
      this.groups.forEach((group) => group.deleteContact(contactId));
    }
  }

  addContactToGroup(groupName, contact) {
    Validator.throwIfNotString(groupName);
    Validator.throwIfNotProperInstance(contact, Contact);
    const group = this.findGroup(groupName);

    if (!group) {
      throw new Error(`Groupe named ${groupName} does not exist`);
    }
    group.addContact(contact);
  }

  deleteContactFromGroup(groupName, contactId) {
    Validator.throwIfNotString(groupName, contactId);
    const group = this.findGroup(groupName);
    group.deleteContact(contactId);
  }

  addNewGroup(name) {
    Validator.throwIfNotString(name);
    if (!this.findGroup(name)) {
      this.groups.push(new Group(name));
    }
  }

  deleteGroup(name) {
    Validator.throwIfNotString(name);
    if (!this.findGroup(name)) {
      this.groups.splice(this.groups.indexOf(group), 1);
    }
  }

  findGroup(name) {
    return this.groups.find((group) => group.name === name);
  }

  findContact(phrase) {
    return this.contacts.find((contact) =>
      contact.checkIfContainPhrase(phrase)
    );
  }
}

module.exports = AddressBook;
