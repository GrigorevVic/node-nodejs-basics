import fsp from "fs/promises";
import fs from "fs";
import { constants } from "fs";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPath = (fileName="./files/fresh.txt") => path.join(__dirname, fileName);
const pathToFile = getPath();

const create = async () => {
  fsp
    .access(pathToFile, constants.F_OK)
    .then(() => {
      try {
        throw new Error("FS operation failed");
      } catch (e) {
        console.error(`${e.name}: ${e.message}`);
      }
    })
    .catch(() => {
      fs.open(pathToFile, "w", (err) => {
        if (err) throw err;
      });
      fs.writeFile(pathToFile, "I am fresh and young", (err) => {
        if (err) throw err;
        console.log("File created!");
      });
    });
};

await create();
