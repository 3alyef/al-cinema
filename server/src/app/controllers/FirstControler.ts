import { Response, Request } from "express";

class FirstControler {
    public home (req:Request, res:Response){
        return res.json({response:"שלום"})
    }
}


export const firstControler = new FirstControler()