import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

const compress = async () => {
  const gzip = createGzip();
  const readableStream = createReadStream("./src/zip/files/fileToCompress.txt");
  const writeStream = createWriteStream("./src/zip/files/archive.gz");
  readableStream.pipe(gzip).pipe(writeStream);
  readableStream.on('error', (e) => {
    console.log('Error!!!', e.message);
  });
};

await compress();
