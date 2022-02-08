const { v4: uuidv4 } = require("uuid");

class Contact {
  #id;
  #creationDate;
  #modificationDate;
  constructor(name, surname, email) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.#id = uuidv4();
    this.#creationDate = new Date();
  }

  set name(value) {
    if (this._name) {
      this.#modificationDate = new Date();
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set surname(value) {
    if (this._surname) {
      this.#modificationDate = new Date();
    }
    this._surname = value;
  }

  get surname() {
    return this._surname;
  }

  set email(value) {
    if (this._email) {
      this.#modificationDate = new Date();
    }
    this._emial = value;
  }

  get email() {
    return this._emial;
  }

  get creationDate() {
    return this.#creationDate;
  }

  get modificationDate() {
    return this.#modificationDate;
  }

  get id() {
    return this.#id;
  }

  displayProperies() {
    console.log({
      name: this._name,
      surname: this._surname,
      email: this._emial,
      id: this.#id,
      creationDate: this.#creationDate,
      modificationDate: this.#modificationDate,
    });
  }

  // Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
  // Ma umożliwiać: aktualizację datę modyfikacji, pozwalac na modyfikację imienia, nazwiska oraz adresu email
}

class Group {
  #id;
  constructor(name) {
    this.name = name;
    this.contact = [];
    this.#id = uuidv4();
  }

  //zmiana grupy nazwa
  //

  addContact(contact) {
    Validation.throwIfAlreadyExists(
      this.contact,
      contact.name,
      contact.surname
    );
    Validation.throwIfNotProperContact(contact);

    this.contact.push(contact);
  }

  checkIfExist(phrase) {
    const regExpToCheck = RegExp(`.*${phrase}.*`, "gi");
    return this.contact.some((contact) => {
      const valuesString = Object.values(contact).join(" ");
      return regExpToCheck.test(valuesString);
    });
  }

  deleteContact(contact) {
    Validation.throwIfNotProperContact(contact);
    this.contact.splice(this.contact.indexOf(contact, 1));
  }
}
// Ma mieć: listę kontaktów oraz nazwę grupy oraz uuid
// Ma umożliwiać: zmianę nazwy grupy, można dodać lub usunac kontakt z grupy, można sprawdzić czy kontakt istnieje w grupie

//addToGroup
//deleteFromGroup
class AddressBook {
  constructor() {
    this.contact = [];
    this.groups = [];
  }

  addNewContact(name, surname, email) {
    Validation.throwIfNotString(name, surname, email);
    Validation.throwIfAlreadyExists(this.contact, name, surname);
    this.contact.push(new Contact(name, surname, email));
  }

  deleteContact(contact) {
    Validation.throwIfNotProperContact(contact);
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
    Validation.throwIfNotString(name);
    Validation.throwIfAlreadyExists(this.group, name);
    this.group.push(new Group(name));
  }

  deleteGroup(group) {
    Validation.throwIfNotExists(group);
    Validation.throwIfNotProperGroup(group);
    this.group.splice(this.group.indexOf(group, 1));
  }

  // Ma mieć: listę wszystkich kontaktów, listę grup kontaktów
  // Ma umożliwiać: szukanie kontaktu po frazie, dodawanie/usuwanie/modyfikacje nowych kontaktów, dodawanie/usuwanie/modyfikacje nowych grup
}

class Validation {
  static throwIfNotProperContact = (contact) => {
    if (!(contact instanceof Contact) || !contact.name || !contact.surname) {
      throw new Error(`Can not perform action, object is not proper type`);
    }
  };

  static throwIfNotProperGroup = (group) => {
    if (!(group instanceof Group) || !group.name) {
      throw new Error(`Can not perform action, object is not proper type`);
    }
  };

  static throwIfNotExists = (data) => {
    if (!data) {
      throw new Error("Such an object does not exist");
    }
  };

  static throwIfNotString = (...args) => {
    if (args.some((item) => typeof item !== "string")) {
      throw new Error("Name, surname and email must be strings");
    }
  };

  static throwIfAlreadyExists = (arr, name, surname) => {
    if (arr.some((item) => item.name === name && item.surname === surname)) {
      throw new Error("Sucha an object already exists");
    }
  };
}

module.exports = { Contact, Group, AddressBook };
