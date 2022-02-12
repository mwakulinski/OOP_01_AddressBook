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

  deleteContact(contact) {
    Validator.throwIfNotProperInstance(contact, Contact);
    if (this.findContact(`${contact.name} ${contact.surname}`)) {
      this.contacts.splice(this.contacts.indexOf(contact), 1);
      this.groups.forEach((group) => group.deleteContact(contact));
    }
  }

  addContactToGroup(groupName, contact) {
    Validator.throwIfNotString(groupName);
    const group = this.findGroup(groupName);
    Validator.throwIfNotProperInstance(group, Group);
    Validator.throwIfNotProperInstance(contact, Contact);
    if (!group.findContact(`${contact.name} ${contact.surname}`)) {
      group.addContact(contact);
    }
  }

  deleteContactFromGroup(groupName, contact) {
    Validator.throwIfNotString(groupName, contactName, contactSurname);
    Validator.throwIfNotProperInstance(contact, Contact);

    const group = this.findGroup(groupName);
    Validator.throwIfNotProperInstance(group, Group);
    group.splice(group.indexOf(contact), 1);
  }

  findContact(phrase) {
    return this.contacts.find((contact) => contact.checkIfHaveProperty(phrase));
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
}

module.exports = AddressBook;
