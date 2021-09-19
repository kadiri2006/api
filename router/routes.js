const express = require("express");
const router = express.Router();
const model = require("../schema/store");
const logic = require("../logic/routes");
const checking =require("../middleware/checking")
router.post("/", logic.post);

router.get("/all",checking, logic.getAll);

router.delete("/:id",logic.delete);

router.get("/:id",logic.getOne);

router.put("/:id",logic.update);

module.exports = router;
