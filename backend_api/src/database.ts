import {Pool, PoolClient, QueryResult} from 'pg';
import config from "config";


const pool:Pool = new Pool(config.get("Database"));


console.log(config.get("Database"));
 export async function query(query:string, params:any):Promise<QueryResult> {
        try {
            const conn = await pool.connect();
            console.log("Connected to DB..");
            const res:QueryResult = await pool.query(query, params);
            console.log("executed Query", {query});
            conn.release();
            console.log("released...");
            return res;
        } catch (error) {
            console.log("error in query", {query});
            throw error;
        }
    }