import express from "express";
import { router } from "./router"
export class App {
    public server = express.application; // server, quando instânciado, torna-se um servidor

    constructor() {
        this.server = express();
        this.middleware();
        this.router();
    };

    private middleware = () =>{
        this.server.use(express.json())
    };

    private router = () =>{
        this.server.use(router)
    }
}