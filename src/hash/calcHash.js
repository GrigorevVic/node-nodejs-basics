import fs from 'fs';
import crypto from 'crypto';
import stream from 'stream/promises';

const calculateHash = async () => {
  const hash = crypto.createHash('sha256');
  const readableStream = fs.createReadStream('./src/hash/files/fileToCalculateHashFor.txt');
  await stream.pipeline(readableStream, hash);
  console.log(hash.digest('hex'));
};

await calculateHash();
