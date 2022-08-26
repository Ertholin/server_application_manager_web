import { Server } from "./server";

export interface CustomResponse{
    timeStamp : Date;
    statusCode : number;
    status : String;
    reason : string;
    message : string;
    developperMessage : string;
    data : { servers?: Server[], server? : Server};
}