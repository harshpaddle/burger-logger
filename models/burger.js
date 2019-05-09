const orm = require("../config/orm");

module.exports = (app) => {
  app.get("/", function(req, res) {
    burgers.selectAll()
      .then(burgersData => {
        res.render()
      })
  })
}