const { Router } = require("express");
const { getActivities, createACtivities } = require("../controllers/activity");
const router = Router();
router.get("/", getActivities);
router.post("/", createACtivities);

module.exports = router;
