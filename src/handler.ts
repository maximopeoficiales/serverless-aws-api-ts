import * as express from "express";
import { NextFunction, Request, Response } from "express";
import * as serverless from "serverless-http";

const app = express();

// Ruta raíz
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    message: "Hello from root!",
  });
});

// Ruta /hello
app.get("/hello", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    message: "Hello from path!",
  });
});

// Manejo de rutas no encontradas
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    error: "Not Found",
  });
});

// Exportar el handler para Serverless
export const handler = serverless(app);
