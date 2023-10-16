const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const boom = require("@hapi/boom");
const routerApi = require("./routes");
const {
  ormErrorHandler,
  boomErrorHandler,
  errorHandler,
} = require("./middlewares/errors.middleware");

const app = express();

const whiteList = [];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(boom.unauthorized("You don't have permissions"));
    }
  },
};

app.use(helmet());
app.use(cors(options));
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("I'm the HOME");
});

routerApi(app);

app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

module.exports = app;
