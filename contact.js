const { v4: uuidv4 } = require("uuid");
const Validator = require("./validator");

class Contact {
  #creationDate;
  #modificationDate;
  constructor(name, surname, email) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.id = uuidv4();
    this.#creationDate = new Date();
  }

  set name(value) {
    Validator.throwIfNotString(value);
    if (this._name) {
      this.#modificationDate = new Date();
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set surname(value) {
    Validator.throwIfNotString(value);
    if (this._surname) {
      this.#modificationDate = new Date();
    }

    this._surname = value;
  }

  get surname() {
    return this._surname;
  }

  set email(value) {
    Validator.throwIfNotString(value);
    Validator.throwIfNotEmail(value);
    if (this._email) {
      this.#modificationDate = new Date();
    }

    this._email = value;
  }

  get email() {
    return this._email;
  }

  get modificationDate() {
    return this.#modificationDate;
  }

  get creationDate() {
    return this.#creationDate;
  }

  checkIfContainPhrase(phrase) {
    Validator.throwIfNotString(phrase);
    const instanceProperies = `${this.name} ${this.surname} ${this.email} ${this.id}`;
    const regExpToCheck = new RegExp(`.*${phrase}.*`, "gi");
    return regExpToCheck.test(instanceProperies);
  }

  // Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
  // Ma umożliwiać: aktualizację datę modyfikacji, pozwalac na modyfikację imienia, nazwiska oraz adresu email
}

module.exports = Contact;
