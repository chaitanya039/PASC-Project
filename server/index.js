const express = require("express");
const mongoose = require("mongoose");
const blogsRoute = require("./Routes/Blogs");
const app = express();
const url = "mongodb://localhost/PASCDB";

// Middlewares
app.use(express.json());
app.use("/blogs", blogsRoute);

mongoose.connect(url)
.then(() => console.log("Database connected successfully !"));


app.listen(2000, () => {
    console.log("Server listening on Port 2000");
});