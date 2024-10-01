import fsp from "fs/promises";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getPath = (fileName) => path.join(__dirname, fileName);
const pathToFile = getPath("./files/fileToRead.txt");

const read = async () => {
    try {
        const list = await fsp.readFile(pathToFile, { encoding: 'utf8' });
        console.log(list);
      } catch (e) {
        const error = new Error("FS operation failed");
        console.error(`${error.name}: ${error.message}`);
      }
};

await read();