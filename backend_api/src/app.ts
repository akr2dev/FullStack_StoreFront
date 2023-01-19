import express from "express";
import cors from "cors";
import {router as productsRouter} from "./routes/Products";
import {router as usersRouter} from "./routes/Users";
import {router as orderRouter} from "./routes/Orders";

const app: express.Application = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: "http://frontendstore.s3-website-us-east-1.amazonaws.com", exposedHeaders:"x-auth-token"}));

app.use(express.urlencoded({ extended: true })); //Parse url encoded payload
app.use(express.json());
//DB connection


app.get("/", (req: express.Request, res: express.Response): void => {
    res.send("Welcome in my store API");
});


app.use("/products",  productsRouter);
app.use("/users",  usersRouter);
app.use("/orders", orderRouter);
app.listen(port, (): void => {
    console.log(`server is running on port ${port}`);
});
export default app;