import * as db from "../database";
import {QueryResult} from "pg";

//Product Constructor
export type Products = {
    id:number,
    name: string,
    price: number,
    category: string
}

export class Product {
    productName: string;
    price: number;
    category: string;


    constructor(productName: string, price: number, category: string) {
        this.productName = productName;
        this.price = price;
        this.category = category;
    }

    /*
    *adding functions in prototype to use in controller
    */

    //get all
    static async index(): Promise<Products[]> {
        try {
            const getProducts: QueryResult = await db.query('SELECT * FROM products', "");
            return getProducts.rows;
        } catch (error) {
            throw error;
        }
    }
    //get by id
    static async show(id: number) {
        try {
            const getProduct: QueryResult = await db.query('SELECT * FROM products WHERE id=$1', [id]);
            return getProduct;
        } catch (error) {
            throw error;
        }
    }
    //get by category
    static async getCategory(category: string) {
        try {
            const getProduct: QueryResult = await db.query('SELECT * FROM products WHERE category=$1', [category]);
            return getProduct;
        } catch (error) {
            throw error;
        }
    }
    // top 5 most popular products
    static  async getTop(){
        try {
            const topProducts = await db.query("SELECT SUM(op.quantity) AS quantity, p.name FROM products as p\n" +
                "INNER JOIN orders_products as op ON op.product_id = p.id\n" +
                "INNER JOIN orders as o ON o.id = op.order_id\n" +
                "GROUP BY p.name\n" +
                "ORDER BY quantity DESC\n" +
                "LIMIT 5\n", "");
            return topProducts;
        }
        catch(err) {
            console.log(err);
        }
    }
    //add product
    async create () {
        try {
            return await db.query(
                'INSERT INTO products (name, price, category) VALUES ($1, $2, $3) RETURNING*',
                [this.productName, this.price, this.category]
            );
        } catch (error) {
            throw error;
        }
    }
    //find by id and update price
    static async update(price: number, id: number) {
        try {
            await db.query(
                'UPDATE products SET price=$1 WHERE id = $2',
                [price, id]
            );
        } catch (error) {
            throw error;
        }
    }
    // delete product by id
    static async delete(id:number) {
        try{
            await db.query('DELETE FROM products WHERE id=$1', [id]);
        }
        catch (e) {
            throw e;
        }
    }
}

