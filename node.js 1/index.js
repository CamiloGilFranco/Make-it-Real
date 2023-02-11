var fs = require("fs");
const { faker } = require("@faker-js/faker");

const namesGenerator = (num) => {
  for (let i = 0; i < num; i++) {
    const name = faker.name.fullName();
    fs.appendFile("./names.txt", `${name}\n`, (error) => {
      if (error) console.log(error);
    });
  }
};

namesGenerator(1000);

console.log("process finished");
