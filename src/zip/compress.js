import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const compress = async() => {
    const readableStream = createReadStream("./src/zip/files/fileToCompress.txt");
    const writeStream = createWriteStream("./src/zip/files/archive.gz");
    readableStream.pipe(createGzip()).pipe(writeStream);
}

 await compress();
