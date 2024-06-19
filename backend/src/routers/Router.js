const express = require("express")
const router = express.Router()
const productController = require("../controllers/ProductController")
const userController = require("../controllers/UserController")
const veterinarController = require("../controllers/VeterinarController")
const groomerController = require("../controllers/GroomerController")



router.get("/products", productController.getAllData)
router.get("/products/:id", productController.getDataById)
router.delete("/products/:id", productController.deleteDataById)
router.post("/products", productController.postData)
router.patch("/products/:id", productController.patchDataById)
router.put("/products/:id", productController.putDataById)

router.get("/users", userController.getAllData)
router.get("/users/:id", userController.getDataById)
router.delete("/users/:id", userController.deleteDataById)
router.post("/users", userController.postData)
router.patch("/users/:id", userController.patchDataById)
router.put("/users/:id", userController.putDataById)

router.get("/veterinars", veterinarController.getAllData)
router.get("/veterinars/:id", veterinarController.getDataById)
router.delete("/veterinars/:id", veterinarController.deleteDataById)
router.post("/veterinars", veterinarController.postData)
router.patch("/veterinars/:id", veterinarController.patchDataById)
router.put("/veterinars/:id", veterinarController.putDataById)

router.get("/groomers", groomerController.getAllData)
router.get("/groomers/:id", groomerController.getDataById)
router.delete("/groomers/:id", groomerController.deleteDataById)
router.post("/groomers", groomerController.postData)
router.patch("/groomers/:id", groomerController.patchDataById)
router.put("/groomers/:id", groomerController.putDataById)

module.exports = router