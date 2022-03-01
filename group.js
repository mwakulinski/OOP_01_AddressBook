const { v4: uuidv4 } = require("uuid");
const Validator = require("./validator");
const Contact = require("./contact");

// Ma mieć: listę kontaktów oraz nazwę grupy oraz uuid
// Ma umożliwiać: zmianę nazwy grupy, można dodać lub usunac kontakt z grupy, można sprawdzić czy kontakt istnieje w grupie

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

    //po idku
    //pytanie lepiej wyrzucić error, czy pominąć akcję jak program znajdzie już istniejący kontakt
    if (!this.findContact(contact.id)) {
      this.contacts.push(contact);
    } else {
      throw new Error(`Such a contact already exist`);
    }
  }

  //w sumie czemu filter lepszy?
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

// const contact1 = new Contact("MIchal", "Wakulinski", "michal.wak@op.pl");
// const contact2 = new Contact("Barbara", "Wakulinski", "michal.wak@op.pl");
// const group = new Group("Barany");
// group.addContact(contact1);
// group.addContact(contact2);
// group.deleteContact(contact1.id);
// // group.deleteContact(contact1);
// // group.deleteContact(contact2);
// console.log(group);

module.exports = Group;
