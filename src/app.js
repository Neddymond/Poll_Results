const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const pollRouter = require("./routes/pollRouter");
const port = process.env.PORT || 3000;


/** View Engine setup */
app.set('views', path.join(__dirname, './public/views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public/views"));
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pollRouter);

app.get("/", (req, res) => {
  res.render("index", { title: "New Polling Unit Results" });
});

app.listen(port, () => console.log(`server running on port ${port}`));

// sendFile(path.resolve(__dirname, "public/views") + "/index.html")