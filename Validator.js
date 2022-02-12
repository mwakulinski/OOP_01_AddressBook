class Validator {
  static throwIfNotProperInstance = (instance, classType) => {
    if (!(instance instanceof classType)) {
      throw new Error(
        `Can not perform action, object shall be of type ${classType.name}`
      );
    }
  };

  static throwIfNotString = (...args) => {
    if (args.some((item) => typeof item !== "string" || item.length === 0)) {
      throw new Error(`Input data must be a string type`);
    }
  };

  static throwIfNotEmail(value) {
    const regExpToCheckIfEmail = new RegExp(
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$"
    );
    if (!regExpToCheckIfEmail.test(value))
      throw new Error("Please provide a valid email");
  }
}

module.exports = Validator;
