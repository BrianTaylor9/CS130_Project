const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoutes = require("./Routes/AuthRoutes");
const paymentRoutes = require("./Routes/PaymentRoutes")
const blogsEventsRoutes = require("./Routes/EventsBlogsRoutes");
const { MONGO_URL } = process.env;
const PORT = parseInt(process.env.PORT);

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.error(err));

  app.use(
    cors({
      origin: ["http://localhost:4000", "http://localhost:3000"],
      // origin: false,
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

app.use(cookieParser());
app.use(express.json());
app.use("/api", blogsEventsRoutes);
app.use("/", authRoutes);
app.use("/", paymentRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});