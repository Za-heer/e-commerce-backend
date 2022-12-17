const express = require("express");
const cors = require("cors");
const app = express();
const mainRouter = require("./Router/mainRouter");
const dbConnection = require("./Config/dbConnection");
const PORT = process.env.PORT || 5000;
app.use(cors({
  origin:"*"
}));
const urlParser = express.json();
app.use(urlParser);
app.use(mainRouter);


app.use(express.json());

dbConnection();

app.get("/", (req, res) => {
  res.send("simple api hit");
});

app.listen(PORT, () => console.log(`Server is running at Local host: ${PORT}`));
