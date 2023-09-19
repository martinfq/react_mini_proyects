const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const items = [
  {
    id: "0",
    title: "Video 1",
    path: "drakukeo.mp4",
  },
  {
    id: "1",
    title: "Video 2",
    path: "kenny.mp4",
  },
  {
    id: "2",
    title: "Video 3",
    path: "bebesita.mp4",
  },
  {
    id: "3",
    title: "Video 4",
    path: "bicho.mp4",
  },
  {
    id: "4",
    title: "Video 5",
    path: "playstation.mp4",
  },
  {
    id: "5",
    title: "Video 6",
    path: "drakukeo.mp4",
  },
  {
    id: "6",
    title: "Video 7",
    path: "kenny.mp4",
  },
  {
    id: "7",
    title: "Video 8",
    path: "bebesita.mp4",
  },
  {
    id: "8",
    title: "Video 9",
    path: "bicho.mp4",
  },
  {
    id: "9",
    title: "Video 10",
    path: "playstation.mp4",
  },
];

app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  res.send("Hola");
});

let range = 5;
let index = 0;

app.get("/page/:page", (req, res) => {
  const start = req.params.page ?? index;
  const portion = items.slice(start * range, start * range + range);

  res.json(portion);
});

app.listen(4000, () => {
  console.log("Servidor Iniciado en el puerto 4000");
});
