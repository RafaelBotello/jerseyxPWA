/////////////////////////////////////////////
//// API endpoints for managing products //
///////////////////////////////////////////

const router = require("express").Router();
let Products = require("../models/products.model");

// get all Product logs on record
// GET: /
// ========================================
router.get("/products", async (req, res) => {
  try {
    const products = await Products.find({});
    res.send(products);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
