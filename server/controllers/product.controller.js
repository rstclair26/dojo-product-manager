const Product = require("../models/product.model");

module.exports.createProduct = (req, res) => {
    console.log(req.body);

    Product.create(req.body)
        .then((newProduct) => {
            res.json(newProduct);
            console.log(newProduct)
        })
        .catch((err) => {
            res.json(err);
            console.log(err)
        })
}