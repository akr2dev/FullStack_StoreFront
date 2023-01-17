import * as db from "../database";
import {QueryResult} from "pg";

//User Constructor
type Users = {
    first_name: string,
    last_name: string,
    email:string,
    password: string,
}

export class User {
    first_name: string;
    last_name: string;
    email:string
    password: string;


    constructor(first_name: string, last_name: string, email:string, password: string) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }

    /*
    *adding functions in User object prototype to initiate in controller
    */

    //get all users
    static async index():Promise<Users[]>{
        try {
            const getProducts: QueryResult = await db.query('SELECT first_name, last_name, email FROM users', "");
            return getProducts.rows;
        } catch (error) {
            throw error;
        }
    }
    //Get user by ID
    static async show(id:number){
        const getUser:QueryResult =
        await db.query("SELECT u.first_name, u.email, count(o.id) AS recent_orders FROM users AS u\n" +
            "INNER JOIN orders as o ON o.user_id = u.id\n" +
            "WHERE u.id = $1 GROUP BY u.id ", [id]);
        return getUser;
    }
    //Get user by Email
    static  async getUserByEmail(email:string){
        const getUser:QueryResult = await db.query('SELECT * FROM users WHERE email=$1', [email]);
        return getUser;
    }
    // create user
    async create(){
        try {
            return await db.query(
                'INSERT INTO users (first_name, last_name, email,  password) VALUES ($1, $2, $3, $4) RETURNING *',
                [this.first_name, this.last_name, this.email,  this.password]
            );
        } catch (error) {
            throw error;
        }
    }
    //update password
    static async update(password:string, email:string) {
        try{
            await db.query(
                'UPDATE users SET password = $1 WHERE email =$2', [password, email]);
        }catch (error){
            throw error;
        }
    }
    //delete by id
    static async delete(id:number){
        try{
            await db.query('DELETE FROM users WHERE id=$1', [id]);
        }
        catch (e) {
            throw e;
        }
    }
}

