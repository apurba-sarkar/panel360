require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();

const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const corsOption = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,PATCH,DELETE,HEAD",
  credentials: true,
};

app.use(cors(corsOption));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("./api/form", contactRoute);
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at PORT no ${PORT}`);
  });
});
