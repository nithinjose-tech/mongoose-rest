const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.routes");
const app = express();

const port = process.env.PORT || 4000;

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.f1tw2.mongodb.net/myDemo?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to moongoose");
  })
  .catch((error) => console.log(`${error},could not connect`));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   res.send({ message: "Hello World" });
// });

app.listen(port, () => {
  console.log(`Node server is listening on port ${port}`);
});
