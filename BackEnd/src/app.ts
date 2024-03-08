import cors from "cors";
import dotenv from "dotenv";
import express, { type Request, type Response } from "express";
import morgan from "morgan";
import { mintAndTransfer } from "./Web3Provider";
dotenv.config();

const app = express();
const port = process.env.PORT ?? 3000;

app.use(morgan("tiny"));
app.use(
  cors({
    origin: process.env.FRONT_URL ?? "*",
  }),
);

app.post("/mint/:wallet", async (req: Request, res: Response) => {
  const wallet = req.params.wallet;
  try {
    const tx = await mintAndTransfer(wallet);
    res.send({
      message: "Tokens minted and transferred successfully",
      tractionHash: tx,
    });
  } catch (e: any) {
    res.status(400).send({
      error: "You can't mint twice in a row",
    });
  }
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
