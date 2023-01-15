import  {Request, Response, NextFunction, Router} from "express";
import * as ProductsController from "../controllers/ProductsController";
import {productMiddleware, categoryMiddleware, priceMiddleware} from "../middleware/ProductValidatorMW";
import {authPermission} from "../middleware/AuthPermissionMW";

export const router:Router = Router();


router.param("id", (req:Request, res:Response, nxt:NextFunction, val):void=>{
    if(!Number(val)) {
         res.status(400).send("Invalid id");
        return;
    }
     nxt();
})

//get all products
router.get("/", ProductsController.getAllProducts);
//get product by id
router.get("/:id", ProductsController.getProductById);
//get products by category
router.get("/cat/:category", categoryMiddleware, ProductsController.getProductByCategory);
// get top five
router.get("/top/five", ProductsController.getTopFive);
// add new product
router.post("/", authPermission, productMiddleware, ProductsController.addNewProduct);
// find by Id and update price
router.put("/:id",priceMiddleware, authPermission, ProductsController.updateProductById);
//delete product by id
router.delete("/:id", authPermission,  ProductsController.deleteProductById);