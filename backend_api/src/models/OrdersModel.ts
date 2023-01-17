import * as db from "../database";
import {QueryResult} from "pg";

//User Constructor
type orders = {
    quantity: number,
    status: string,
}

export class Order {
    quantity: number;
    status: string;



    constructor(quantity: number, status: string) {
        this.quantity = quantity;
        this.status = status;
    }

    /*
    *adding functions in User object prototype to initiate in controller
    */

    //get current active orders
    static async getActive(id:number){
        try {
            const activeOrders:QueryResult = await db.query("SELECT u.id, u.first_name, u.email, p.name, o.status  FROM orders AS o INNER JOIN users AS u ON o.user_id = u.id INNER JOIN products AS p ON o.product_id = p.id WHERE u.id =$1 AND o.status = 'active'"
                , [id])
            return activeOrders;
        }catch (e) {
            console.log(e)
        }
    }
    static async getComplete(id:number){
        try {
            const completeOrders:QueryResult = await db.query("SELECT u.id, u.first_name, u.email, p.name, o.status  FROM orders AS o INNER JOIN users AS u ON o.user_id = u.id INNER JOIN products AS p ON o.product_id = p.id WHERE u.id =$1 AND o.status = 'complete'"

                , [id]
            )
            return completeOrders;
        }catch (e) {
            console.log(e)
        }
    }

}

