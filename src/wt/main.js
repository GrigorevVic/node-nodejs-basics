import { Worker } from "worker_threads";
import { cpus } from "os";

const numCores = cpus().length;
const result = [];

const performCalculations = async () => {
  const worker = new Worker("./src/wt/worker.js");
  for (let i = 0; i < numCores; i += 1) {
    worker.postMessage(i + 10);
  }

  worker.on("message", (data) => {
    result.push({ status: "resolved", data });
    if (result.length === numCores) {
      console.log(result);
    }
  });

  worker.on("error", (err) => {
    result.push({ status: "error", data: null });
    if (result.length === numCores) {
      console.log(result);
    }
  });
};
await performCalculations();
