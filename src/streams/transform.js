import { Transform } from "stream";

const transform = async () => {
  const reverse = new Transform({
    transform(chank, encoding, cb) {
      cb(null, chank.toString().split("").reverse().join(""));
    },
  });
  process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();
