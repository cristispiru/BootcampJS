import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import errorsMiddleware from "./src/middleware/errorsMiddleware.js";
import userRouter from "./src/routes/user.js";
import gameRouter from "./src/routes/game.js";

// Sub router creation
const router = express.Router();

// Linked routes
router.route('/node')
  .get((req, res) => {
    res.send('Course node GET')
  })
  .post((req, res) => {
    res.send('Course node POST')
  })

// Match all types of requests (GET, POST, PUT, ...)
router.all('/react', (req, res) => {
  res.send('We are not doing this now')
})


dotenv.config();

const app = express();
app.use(bodyParser.json({ extended: false }));
app.use(cors());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

// Link router to app
app.use('/courses', router);

app.use("/users", userRouter);
app.use("/games", gameRouter);

app.use(errorsMiddleware);

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
