const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");
const userController = require("../controllers/UserController");
const veterinarController = require("../controllers/VeterinarController");
const groomerController = require("../controllers/GroomerController");
const groomingPriceController = require("../controllers/GroomingPriceController");


router.get("/products", productController.getAllData);
router.get("/products/:id", productController.getDataById);
router.post("/products", productController.postData); 
router.patch("/products/:id",  productController.patchDataById); 
router.put("/products/:id", productController.putDataById); 
router.delete("/products/:id",  productController.deleteDataById); 


router.get("/users",  userController.getAllData); 
router.get("/users/:id", userController.getDataById); 
router.post("/users",  userController.postData); 
router.patch("/users/:id", userController.patchDataById); 
router.put("/users/:id", userController.putDataById); 
router.delete("/users/:id", userController.deleteDataById); 


router.get("/veterinars", veterinarController.getAllData);
router.get("/veterinars/:id", veterinarController.getDataById);
router.post("/veterinars",  veterinarController.postData); 
router.patch("/veterinars/:id", veterinarController.patchDataById); 
router.put("/veterinars/:id", veterinarController.putDataById); 
router.delete("/veterinars/:id", veterinarController.deleteDataById); 


router.get("/groomers", groomerController.getAllData);
router.get("/groomers/:id", groomerController.getDataById);
router.post("/groomers", groomerController.postData); 
router.patch("/groomers/:id", groomerController.patchDataById); 
router.put("/groomers/:id", groomerController.putDataById); 
router.delete("/groomers/:id",  groomerController.deleteDataById); 


router.get("/grooming", groomingPriceController.getAllData);
router.get("/grooming/:id", groomingPriceController.getDataById);
router.post("/grooming", groomingPriceController.postData); 
router.patch("/grooming/:id",  groomingPriceController.patchDataById); 
router.put("/grooming/:id",  groomingPriceController.putDataById); 
router.delete("/grooming/:id",  groomingPriceController.deleteDataById); 

module.exports = router;
