var Product = require('../models/products');

module.exports = {
  create: function(req, res, next) {
    var product = new Product(req.body);
      product.save(function(err, product) {
        if(err) {
          res.status(500).json(err);
        } else {
          res.status(200).json(product);
        }
      })

  },
  read: function(req, res, next) {
    Product.find().exec(function(err, response){
        if(err) {
          res.status(500).json(err)
        } else {
          res.json(response)
        }
      });
  },
  update: function(req, res, next) {
    Product.findByIdAndUpdate(req.params.id, req.body, function(error, response){
      if(error) {
        return res.status(500).json(error)
      } else {
        return res.json(response)
      }
    });
  },
  show: function(req, res, next) {
    Product.findById(req.params.id, function(err, response){
        if(err) {
          res.status(500).json(err)
        } else {
          res.json(response)
        }
      });
  },
  destroy: function(req, res, next) {
    Product.findByIdAndRemove(req.params.id, function(error, response){
      if(error) {
        return res.status(500).json(error)
      } else {
        return res.json(response)
      }
    });
  },
};
