// All necessary requires, such as the Cake model.
const Review = require("mongoose").model("Review");
const Cake = require("mongoose").model("Cake");

// var moment = require("moment");

module.exports = {
  allCakes: function(req, res) {
    Cake.find()
      .then(cakes => {
        console.log(cakes);
        res.json({ cakes: cakes });
      })
      .catch(err => res.json(err));
  },

  oneCake: function(req, res) {
    console.log("cake id: " + req.params.id);
    Cake.findOne({ _id: req.params.id })
      .then(cake => {
        console.log("cake: ", cake);
        res.json(cake);
      })
      .catch(err => res.json(err));
  },

  createReview: function(req, res) {
    console.log("cake id: " + req.params.id);
    const newReview = new Review(req.body);
    console.log("Creating a new review" + newReview);
    newReview
      .save()
      .then(review => {
        Cake.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { reviews: review } }
        )
          .then(cake => {
            cake.updated_at = Date.now();
            console.log("Found Cake! ", cake);
          })
          .catch(err => {
            console.log("We have an error!", err);
            for (var key in err.errors) {
              req.flash("cake", err.errors[key].message);
            }
            res.json(err);
          });
      })
      .then(review => res.json(review))
      .catch(err => {
        console.log("We have an error!", err);
        for (var key in err.errors) {
          req.flash("new_review", err.errors[key].message);
        }
        res.json(err);
      });
  },
  createCake: function(req, res) {
    const cake = new Cake(req.body);
    cake
      .save()
      .then(cake => res.json(cake))
      .catch(err => {
        console.log("We have an error!", err);
        for (var key in err.errors) {
          req.flash("new_cake", err.errors[key].message);
        }
        res.json(err);
      });
  }
};
