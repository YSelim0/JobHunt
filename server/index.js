const app = require("express")();
const body_parser = require("body-parser");
const cors = require("cors");
const http = require("http").createServer(app);

app.use(cors());
app.use(body_parser.json());

app.listen(3001);
