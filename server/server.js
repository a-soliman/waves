const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");

/* ROUTES */
const users = require("./routes/api/users");
const products = require("./routes/api/products");
const brands = require("./routes/api/brands");
const woods = require("./routes/api/woods");
const shop = require("./routes/api/shop");

/* EXPRESS APP */
const app = express();
const port = process.env.PORT || 5555;

/* BODY PARSER CONFIGURATIONS */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* COOKIE PARSER CONFIGURATIONS */
app.use(cookieParser());

/* DB Config & Mongoose to Mongo connection */
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected Successfully!"))
  .catch(e => console.log(`Error while connecting to MongoDB ${e}`));

/* POINTING PUBLIC FOLDER */
const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));

/* PASSPORT AUTHENTICATION CONFIGURATION */
app.use(passport.initialize());
require("./config/passport")(passport);
require("./config/passport_google")(passport);

/* USE ROUTES */
app.use("/api/users", users);
app.use("/api/products", products);
app.use("/api/brands", brands);
app.use("/api/woods", woods);
app.use("/api/shop", shop);

/* SERVE REACT APP FOR ALL ROUTES */
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log("Server is up!");
});
