import { readFileSync } from "fs";
import path from "path";
import { act } from "react-testing-library";

const breeds = [
  { name: "Bichon Frise" },
  { name: "Bolognese" },
  { name: "Coton de Tulear" },
  { name: "Havanese" },
  { name: "Maltese" }
];

const doggos = JSON.parse(
  readFileSync(path.join(__dirname, "res.json")).toString()
);
