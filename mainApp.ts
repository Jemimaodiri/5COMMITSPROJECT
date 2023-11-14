import { Application, Request, Response } from "express";

export const mainApp = (app: Application) => {
  try {
    app.use("/api/v1");
    app.get("/", (req: Request, res: Response) => {
      try {
        return res.status(200).json({
          message: "Database Connection established",
        });
      } catch (error) {
        return res.status(404).json({
          message: "Database Connection error",
        });
      }
    });
  } catch (error) {
    console.log("Error:", error);
  }
};
