const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const path = require("path");
const { PORT } = require("./config/keys");
const optionsSwagger = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Matras API",
      version: "1.0.0",
      description: "A simple express API",
    },
    servers: [
      {
        url: `http://localhost:1200`,
      },
    ],
  },
  apis: ["/routes/*.js"],
};
const specs = swaggerJsDoc(optionsSwagger);

require("dotenv").config();
const app = express();
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
const cors = require("cors");
const routes = require("./routes");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.options("*", cors());
app.use(cors({ origin: "*" }));
app.use(routes);
app.use(express.static(path.join(__dirname, "uploads")));

app.listen(PORT, () => {
  // console.log(`http://10.10.112.252:${PORT}`);
  console.log(`Server is running in port ${PORT}`);
});
