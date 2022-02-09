//addToGroup
//deleteFromGroup
class AddressBook {
  constructor() {
    this.contact = [];
    this.groups = [];
  }

  addNewContact(name, surname, email) {
    Validator.throwIfNotString(name, surname, email);
    Validator.throwIfAlreadyExists(this.contact, name, surname);
    this.contact.push(new Contact(name, surname, email));
  }

  deleteContact(contact) {
    Validator.throwIfNotProperContact(contact);
    //usunac z innych grup[]
    //czy kotnatk jest
    this.contact.splice(this.contact.indexOf(contact, 1));
  }

  findContact(phrase) {
    const regExpToCheck = RegExp(`.*${phrase}.*`, "gi");

    //poprawka - do kontaktu
    return (
      this.contact?.find((contact) => {
        const valuesString = Object.values(contact).join(" ");
        return regExpToCheck.test(valuesString);
      }) ?? "There is no such contact"
    );
  }

  //jest?niema?
  addNewGroup(name) {
    Validator.throwIfNotString(name);
    Validator.throwIfAlreadyExists(this.group, name);
    this.group.push(new Group(name));
  }

  deleteGroup(group) {
    Validator.throwIfNotExists(group);
    Validator.throwIfNotProperGroup(group);
    this.group.splice(this.group.indexOf(group, 1));
  }

  // Ma mieć: listę wszystkich kontaktów, listę grup kontaktów
  // Ma umożliwiać: szukanie kontaktu po frazie, dodawanie/usuwanie/modyfikacje nowych kontaktów, dodawanie/usuwanie/modyfikacje nowych grup
}
