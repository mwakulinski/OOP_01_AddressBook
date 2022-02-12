const { v4: uuidv4 } = require("uuid");
const Validator = require("./validator");

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
    Validator.throwIfNotString(value);
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set surname(value) {
    if (this._surname) {
      this.#modificationDate = new Date();
    }
    Validator.throwIfNotString(value);
    this._surname = value;
  }

  get surname() {
    return this._surname;
  }

  set email(value) {
    if (this._email) {
      this.#modificationDate = new Date();
    }
    Validator.throwIfNotString(value);
    Validator.throwIfNotEmail(value);
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

  checkIfHaveProperty(phrase) {
    Validator.throwIfNotString(phrase);

    const instanceProperies = `${this.name} ${this.surname} ${this.email} ${
      this.#id
    }`;
    const regExpToCheck = new RegExp(`.*${phrase}.*`, "gi");
    if (regExpToCheck.test(instanceProperies)) {
      return true;
    }
    return false;
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

module.exports = Contact;
