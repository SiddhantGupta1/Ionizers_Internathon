// sequelize-auto -h internathon.cedjgswziywb.ap-south-1.rds.amazonaws.com -d internathon -u admin -x dellhplinux!#123 --dialect mysql -o ./models
require("dotenv/config");
const express = require("express");
const app = express();
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const yamljs = require("yamljs");
const swaggerDocs = yamljs.load("./swagger.yaml");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
const api = require("./routes/routes.js");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("server is up at azure");
});
app.use("/api", api);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server started at port: ${PORT}`);
});
