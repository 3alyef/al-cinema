require("dotenv").config()
const PORT = process.env.PORT || 4000
import { App } from "./app";

new App().server.listen(PORT, ()=>{
    console.log("Running...")
})