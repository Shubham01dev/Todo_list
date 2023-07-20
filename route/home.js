const express = require("express")

const router = express.Router();
const todolistInput = require("../controller/todolistInput") 

router.get("/", todolistInput.input )
router.post("/post", todolistInput.list)
router.get("/delete", todolistInput.RemoveList)

module.exports = router;