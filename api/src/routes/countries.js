const { Router } = require("express");
const { getCountries,getCountriesById } = require("../controllers/country");
const router = Router();
router.get("/", getCountries)
      .get("/:id", getCountriesById)

module.exports = router;
