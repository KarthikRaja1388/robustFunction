let person = { name: "Adithya", age: 1 };

function getPerson(person) {
  try {
    if (
      typeof person !== "object" ||
      person === null ||
      !("name" in person) ||
      !("age" in person)
    ) {
      throw new Error("Invalid parameter type");
    }

    const { name, age } = person;
    return `Name: ${name}, Age: ${age}`;
  } catch (error) {
    return error.message;
  }
}

console.log(getPerson(person));
