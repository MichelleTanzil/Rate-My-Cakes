var cakesController = require("../controllers/cakes.js");

module.exports = function(app) {
  // Get all cakes
  app.get("/cakes", cakesController.allCakes);
  // Get one cake
  app.get("/cakes/:id", cakesController.oneCake);
  // Create new review
  app.post("/cakes/:id", cakesController.createReview);
  //Create new Cake
  app.post("/cakes", cakesController.createCake);
};
