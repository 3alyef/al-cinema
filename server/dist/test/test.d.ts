/// <reference types="node" />
import * as http from "http";
declare const server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
export { server };
