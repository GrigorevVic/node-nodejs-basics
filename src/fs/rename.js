import fsp from "fs/promises";
import { constants } from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPath = (fileName) => path.join(__dirname, fileName);

const pathToFile = getPath("./files/wrongFilename.txt");
const pathToFileRename = getPath("./files/properFilename.md");

const rename = async () => {
  try {
    await fsp.access(pathToFileRename, constants.F_OK);
    const error = new Error("FS operation failed");
    console.error(`${error.name}: ${error.message}`);
  } catch (e) {
    try {
      await fsp.rename(pathToFile, pathToFileRename);
      console.log("operation successful!");
    } catch (e) {
      const error = new Error("FS operation failed");
      console.error(`${error.name}: ${error.message}`);
    }
  }
};

await rename();
