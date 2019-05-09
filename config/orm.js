const connection = require("./connection");

// function that reads from the burgers table.
const selectAll = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM burgers", function (err, burgersData) {
      if (err) throw err;
      return resolve(burgersData);
    });
  });
};

// create a function that inserts new burger in the db;

const insertOne = burgerObject => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO burgers SET ?", [burgerObject], function (err, result) {
      if (err) {
        return reject(err);
      }
      return resolve(result)
    })
  })
} 

const updateOne = (devourValue, burgerId) => {
  return new Promise((resolve, reject) => {
    devourValue = (devourValue === "true") ?
      (true) : (false);
    
    connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [devourValue, burgerId], function (err, burgerData) {
      if (err) {
        return reject(err);
      }
      return resolve(burgerData);
    });
  });
};

module.exports = {
  selectAll,
  insertOne,
  updateOne
};
