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

module.exports = Contact;
