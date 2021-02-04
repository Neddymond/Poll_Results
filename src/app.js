const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const pollRouter = require("./routes/pollRouter");
const port = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "public/views"));
app.set("view engine", "html");
app.use(express.static("./public"));

/** View Engine setup */
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pollRouter);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/views") + "/index.html")
});

app.listen(port, () => console.log(`server running on port ${port}`));