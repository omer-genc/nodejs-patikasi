// employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
// Bu veriyi okuyalım. (READ)
// Bu veriyi güncelleyelim.
// Dosyayı silelim.

const fs = require("fs");

const data = { name: "Employee 1 Name", salary: 2000 };
fs.writeFile("employees.json", JSON.stringify([data]), "utf8", (err, data) => {
  console.log("succeeded");
});

var readData = [];
fs.readFile("employees.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  readData = [...JSON.parse(data)];
  console.table(readData);
});

// fs.appendFile(
//   "employees.json",
//   JSON.stringify(
//     readData.push({
//       name: "Ömer",
//       salary: 500,
//     })
//   ),
//   "utf8",
//   (err, data) => {
//     if (err) console.log(err);
//     else console.log("Append succeeded");
//   }
// );

fs.readFile("employees.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.table(data);
});
