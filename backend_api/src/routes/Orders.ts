import  {Router} from "express";
import * as OrderController from "../controllers/OrdersController";
import {userPermission} from "../middleware/AuthPermissionMW";

export const router:Router = Router();

router.get("/active", userPermission, OrderController.getActiveOrders)
router.get("/complete", userPermission, OrderController.getCompleteOrders)