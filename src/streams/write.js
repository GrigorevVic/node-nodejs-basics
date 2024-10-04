import fs from "fs";

const write = async () => {
    const writeStream = fs.createWriteStream("./src/streams/files/fileToWrite.txt");
    process.stdin.pipe(writeStream);
};

await write();