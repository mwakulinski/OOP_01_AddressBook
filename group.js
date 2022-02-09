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
    Validator.throwIfAlreadyExists(this.contact, contact.name, contact.surname);
    Validator.throwIfNotProperContact(contact);

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
    Validator.throwIfNotProperContact(contact);
    this.contact.splice(this.contact.indexOf(contact, 1));
  }
}
// Ma mieć: listę kontaktów oraz nazwę grupy oraz uuid
// Ma umożliwiać: zmianę nazwy grupy, można dodać lub usunac kontakt z grupy, można sprawdzić czy kontakt istnieje w grupie
