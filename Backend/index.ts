import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import routes from "./src/routes/index";
import { sequelize } from "./src/models/index";

const PORT = 3000;

const app: express.Application = express();

//middlewares
//headers
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
// app.use(cookieParser());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", `http://localhost:${PORT}`); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//rutas
app.use("/", routes);

// Error catching endware.
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("el servidor está andando en el puerto " + PORT);
    app.listen(3000, () => {
      console.log("funca en el " + PORT);
    });
  })
  .catch((err) => console.log(err));
