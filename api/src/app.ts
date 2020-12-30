import session, { Store } from "express-session";
import express from "express";
import { SESSION_OPTIONS } from "./config";
import { Register } from "./routes";

export const createApp = (store: Store) => {

    const app = express();

    app.use(express.json())

    app.use(
        session({
            ...SESSION_OPTIONS,
            store,
        })
    );
    
    app.get("", (req, res) => {
        res.json({ message: "OK" });
    });

    app.use(Register);
    
    return app;

} 