class Validator {
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
