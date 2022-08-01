import express from "express";

const app = express();
const PORT = 4000;

const handleHome = (req, res) => {
  console.log("handleHome!!");
  return res.send("SERVER!!!");
};
const firstMiddleware = (req, res, next) => {
  console.log("It's the first middleware!!");
  next();
};
const secondMiddleware = (req, res, next) => {
  console.log("It's the second middleware!!");
  next();
};

app.use("/", firstMiddleware);
app.use("/", secondMiddleware);
app.get("/", handleHome);

const handleListen = () => console.log(`🎸 Server listening on PORT ${PORT}`);

app.listen(PORT, handleListen);
