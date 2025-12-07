const express = require("express")
const { getAllUsers, createUser, updateUser, deleteUser } = require("../controller/userController")
const router = express.Router()

router.get("/home", getAllUsers)
router.post("/createUser", createUser)
router.put("/updateUser", updateUser)
router.delete("/deleteUser", deleteUser)

module.exports = router;