const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: "Daniel" };
    user["lastName"] = "Molina";
    return user;
  }
};

module.exports = functions;