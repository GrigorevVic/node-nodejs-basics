import { createGunzip } from "zlib";
import { createReadStream, createWriteStream } from 'fs';

const decompress = async () => {
  const gzip = createGunzip();
  const readableStream = createReadStream("./src/zip/files/archive.gz");
  const writeStream = createWriteStream("./src/zip/files/fileToCompress.txt");
  readableStream.pipe(gzip).pipe(writeStream);
  readableStream.on('error', (e) => {
    console.log('Error!!!', e.message);
  });
};

 await decompress();
